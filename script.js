const GIST_URL = 'https://gist.githubusercontent.com/LeoLakshman/2da0383115823f0c3f0395678899d666/raw/d771fb4249a66078a2ea00eda39d3809d2a231c0/studentData.json';

fetch(GIST_URL)
    .then(res => res.json())
    .then(studentData => {
        console.log("Student Data Loaded:", studentData);

        new Globe(document.getElementById('globeViz'))
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .htmlElementsData(studentData)
            .htmlLat('latitude')
            .htmlLng('longitude')
            .htmlElement(d => {
                const el = document.createElement('div');
                el.textContent = `${d.city} (${d.studentCount} TTU Students)`;
                el.style.color = d.studentCount > 0 ? 'red' : 'orange';
                el.style.fontSize = '20px';
                el.style.background = 'rgba(0, 0, 0, 0.7)';
                el.style.padding = '10px';
                el.style.borderRadius = '5px';
                el.style.whiteSpace = 'nowrap';
                return el;
            })
            .onHtmlElementClick(d => {
                console.log("City clicked:", d);
                console.log("Student Data in click:", studentData);
                displayStudentDetails(d, studentData);
            });
    });

function displayStudentDetails(cityData, studentData) {
    console.log("City Data and Student Data in display:", cityData, studentData);
    const detailsDiv = document.getElementById('studentDetails');
    let detailsHTML = `<h2>Students from ${cityData.city}</h2>`;

    const cityStudents = studentData.filter(student => student.city === cityData.city);
    console.log("City Students:", cityStudents);

    if (cityStudents.length > 0) {
        cityStudents.forEach(student => {
            detailsHTML += `<p>Major: ${student.major || 'N/A'}</p>`;
            detailsHTML += `<p>Details: ${student.otherDetails || 'N/A'}</p>`;
        });
    } else {
        detailsHTML += `<p>No student details available.</p>`;
    }

    console.log("Details HTML:", detailsHTML);

    detailsDiv.innerHTML = detailsHTML;
    detailsDiv.style.display = 'block';
    console.log("Details Div Display:", detailsDiv.style.display);
}

# GlobeTTU
Interactive 3D globe showing student locations.
# TTU Student Globe Visualization

This project is a web-based 3D globe visualization that displays student data from various cities around the world using the Globe.GL library. When a city label on the globe is clicked, detailed student information, such as their major and other details, is displayed.

## Features

* **Interactive 3D Globe:** Visualizes student locations on a 3D globe using Globe.GL.
* **Data from JSON:** Loads student data from an external JSON file hosted on GitHub Gist.
* **Clickable City Labels:** City labels on the globe can be clicked to display student details.
* **Detailed Student Information:** Displays student majors and other relevant details when a city is clicked.
* **Full-Screen Visualization:** The globe visualization is designed to be full-screen for an immersive experience.

## Technologies Used

* **Globe.GL:** A JavaScript library for creating 3D globe visualizations.
* **JavaScript:** Used for fetching data and handling interactions.
* **JSON:** Used for storing and transferring student data.
* **HTML/CSS:** Used for structuring and styling the web page.
* **GitHub Gist:** Used for hosting the JSON data file.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository (if applicable):**
    ```bash
    git clone [repository URL]
    cd [repository directory]
    ```
2.  **Create `index.html` and `script.js` files:**
    * Copy the contents of the provided `index.html` and `script.js` files into your local files.
3.  **Host the JSON file:**
    * Ensure that the `GIST_URL` variable in `script.js` points to the raw URL of your `studentData.json` file on GitHub Gist. Or download the json file, place it in the same directory as your html and js files, and change the fetch command to fetch("./studentData.json").
4.  **Run a local web server:**
    * **Python:**
        ```bash
        python -m http.server
        ```
        or
        ```bash
        python -m SimpleHTTPServer
        ```
    * **Node.js (using `http-server` or `live-server`):**
        ```bash
        npm install -g http-server
        http-server
        ```
        or
        ```bash
        npm install -g live-server
        live-server
        ```
5.  **Open the visualization:**
    * Open your web browser and navigate to `http://localhost:8000` (or the URL provided by your local server).

## Data Source

The student data is stored in a JSON file (`studentData.json`) hosted on GitHub Gist. You can find the data at:

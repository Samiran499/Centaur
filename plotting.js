const filePath = 'agastya_data.csv';

fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        // Extracting the values for x and y axis
        const xValues = parsedData.data.map(row => row['time']);
        const yValues = parsedData.data.map(row => row[' alt']);

        // Creating the data to plot
        const trace = {
            x: (xValues/1000000),
            y: yValues,
            mode: 'lines',
            type: 'scatter'
        };

        const plotData = [trace];

        // Layout options
        const layout = {
            font: {
                color: 'rgb(255, 255, 255)'
            },
            title: 'Altitude',
            xaxis: {
                title: 'Time'
            },
            yaxis: {
                title: 'Altitude'
            },
            plot_bgcolor: 'rgb(21, 1, 40)',
            paper_bgcolor: 'rgb(21, 1, 40)'
        };

        // Rendering the plot
        Plotly.newPlot('alt', plotData, layout);
    })
    .catch(error => {
        console.error('Error fetching or parsing the CSV file:', error);
    }); 

fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        // Extracting the values for x and y axis
        const xValues = parsedData.data.map(row => row['time']);
        const yValues = parsedData.data.map(row => row[' temperature']);

        // Creating the data to plot
        const trace = {
            x: (xValues/1000000),
            y: yValues,
            mode: 'lines',
            type: 'scatter'
        };

        const plotData = [trace];

        // Layout options
        const layout = {
            font: {
                color: 'rgb(255, 255, 255)'
            },
            title: 'Temperature',
            xaxis: {
                title: 'Time'
            },
            yaxis: {
                title: 'Tempearture'
            },
            plot_bgcolor: 'rgb(21, 1, 40)',
            paper_bgcolor: 'rgb(21, 1, 40)'
        };

        // Rendering the plot
        Plotly.newPlot('temp', plotData, layout);
    })
    .catch(error => {
        console.error('Error fetching or parsing the CSV file:', error);
    });

fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        // Extracting the values for x and y axis
        const xValues = parsedData.data.map(row => row['time']);
        const yValues1 = parsedData.data.map(row => row[' gyro_x']);
        const yValues2 = parsedData.data.map(row => row[' gyro_y']);
        const yValues3 = parsedData.data.map(row => row[' gyro_z']);

        // Creating the data to plot
        const tracex = {
            x: (xValues/1000000),
            y: yValues1,
            mode: 'lines',
            name: 'X-axis',
            type: 'scatter'
        };

        const tracey = {
            x: (xValues/1000000),
            y: yValues2,
            mode: 'lines',
            name: 'Y-axis',
            type: 'scatter'
        };

        const tracez = {
            x: (xValues/1000000),
            y: yValues3,
            mode: 'lines',
            name: 'Z-axis',
            type: 'scatter'
        };

        const plotData = [tracex, tracey, tracez];

        // Layout options
        const layout = {
            font: {
                color: 'rgb(255, 255, 255)'
            },
            title: 'Gyrometric Data',
            xaxis: {
                title: 'Time'
            },
            yaxis: {
                title: 'Gyro'
            },
            plot_bgcolor: 'rgb(21, 1, 40)',
            paper_bgcolor: 'rgb(21, 1, 40)'
        };

        // Rendering the plot
        Plotly.newPlot('gyro', plotData, layout);
    })
    .catch(error => {
        console.error('Error fetching or parsing the CSV file:', error);
    }); 

    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const parsedData = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
        });

        // Extracting the values for x and y axis
        const xValues = parsedData.data.map(row => row['time']);
        const yValues1 = parsedData.data.map(row => row[' high_x']);
        const yValues2 = parsedData.data.map(row => row[' high_y']);
        const yValues3 = parsedData.data.map(row => row[' high_z']);

        // Creating the data to plot
        const tracex = {
            x: (xValues/1000000),
            y: yValues1,
            mode: 'lines',
            name: 'X-axis',
            type: 'scatter'
        };

        const tracey = {
            x: (xValues/1000000),
            y: yValues2,
            mode: 'lines',
            name: 'Y-axis',
            type: 'scatter'
        };

        const tracez = {
            x: (xValues/1000000),
            y: yValues3,
            mode: 'lines',
            name: 'Z-axis',
            type: 'scatter'
        };

        const plotData = [tracex, tracey, tracez];

        // Layout options
        const layout = {
            font: {
                color: 'rgb(255, 255, 255)'
            },
            title: 'Accelerometer Data',
            xaxis: {
                title: 'Time'
            },
            yaxis: {
                title: 'Acceleration'
            },
            plot_bgcolor: 'rgb(21, 1, 40)',
            paper_bgcolor: 'rgb(21, 1, 40)'
        };

        // Rendering the plot
        Plotly.newPlot('acc', plotData, layout);
    })
    .catch(error => {
        console.error('Error fetching or parsing the CSV file:', error);
    }); 
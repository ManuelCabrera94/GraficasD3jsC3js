var chart = c3.generate({
           bindto: '#gPastel3',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14344885],
        ["SECUNDARIA", 6821621],
        ["BACHILLER", 4727311],
          ],
          type : 'pie'
		},
        axis: {
          x: {
            label: 'Sepal.Width'
          },
          y: {
            label: 'Petal.Width'
          }
        }
      });
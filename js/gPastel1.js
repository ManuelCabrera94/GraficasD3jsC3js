      var chart = c3.generate({
           bindto: '#gPastel1',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14789406],
        ["SECUNDARIA", 6340232],
        ["BACHILLER", 4057265],
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
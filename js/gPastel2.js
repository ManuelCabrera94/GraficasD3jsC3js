var chart = c3.generate({
           bindto: '#gPastel2',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14580379],
        ["SECUNDARIA", 6571858],
        ["BACHILLER", 4602837],
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
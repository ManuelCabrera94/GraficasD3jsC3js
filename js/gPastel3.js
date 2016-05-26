var chart = c3.generate({
           bindto: '#gPastel3',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14580379],
        ["SECUNDARIA", 6571858],
        ["BACHILLLERATO", 4602837],
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
	  
	  	d3.select('#gPastel3 svg').append('text')
		.attr('x', d3.select('#gPastel3 svg').node().getBoundingClientRect().width / 2)
		.attr('y', 10)
		.attr('text-anchor', 'middle')
		.style('font-size', '1.4em')
		.text('Grafica de Pastel del 2013');
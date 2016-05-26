      var chart = c3.generate({
           bindto: '#gPastel1',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14909419],
        ["SECUNDARIA", 6167424],
        ["BACHILLLERATO", 3950126],
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
	  
	d3.select('#gPastel1 svg').append('text')
		.attr('x', d3.select('#gPastel1 svg').node().getBoundingClientRect().width / 2)
		.attr('y', 10)
		.attr('text-anchor', 'middle')
		.style('font-size', '1.4em')
		.text('Grafica de Pastel del 2011');
		
	//d3.select('#gPastel1 svg').attr("width", 345);
var chart = c3.generate({
           bindto: '#gPastel2',
        data: {
            
          columns: [
          
        ["PRIMARIA", 14789406],
        ["SECUNDARIA", 6340232],
        ["BACHILLLERATO", 4057265],
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
 
 	d3.select('#gPastel2 svg').append('text')
		.attr('x', d3.select('#gPastel2 svg').node().getBoundingClientRect().width / 2)
		.attr('y', 10)
		.attr('text-anchor', 'middle')
		.style('font-size', '1.4em')
		.text('Grafica de Pastel del 2012');
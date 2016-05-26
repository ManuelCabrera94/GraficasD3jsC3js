		chart = c3.generate({
			bindto: '#gLineal',
        data: {
            x: "AÑO",
          json: [
            {"AÑO": "1990", "PRIMARIA": 14401588, "SECUNDARIA":4190190, "BACHILLERATO": 1721626             
            },
			{"AÑO": "1991", "PRIMARIA": 14396993, "SECUNDARIA":4160692, "BACHILLERATO": 1725294             
            },
			{"AÑO": "1992", "PRIMARIA": 14425669, "SECUNDARIA":4203098, "BACHILLERATO": 1767020             
            },
			{"AÑO": "1993", "PRIMARIA": 14469450, "SECUNDARIA":4341924, "BACHILLERATO": 1837655             
            },
			{"AÑO": "1994", "PRIMARIA": 14574202, "SECUNDARIA":4493173, "BACHILLERATO": 1936398             
            },
			{"AÑO": "1995", "PRIMARIA": 14623438, "SECUNDARIA":4687335, "BACHILLERATO": 2050689             
            },
			{"AÑO": "1996", "PRIMARIA": 14650521, "SECUNDARIA":4809266, "BACHILLERATO": 2222339             
            },
			{"AÑO": "1997", "PRIMARIA": 14647797, "SECUNDARIA":4929301, "BACHILLERATO": 2323069             
            },
			{"AÑO": "1998", "PRIMARIA": 14697915, "SECUNDARIA":5070552, "BACHILLERATO": 2412722             
            },
			{"AÑO": "1999", "PRIMARIA": 14765603, "SECUNDARIA":5208903, "BACHILLERATO": 2518001             
            },
			{"AÑO": "2000", "PRIMARIA": 14792528, "SECUNDARIA":5349659, "BACHILLERATO": 2594242             
            },
			{"AÑO": "2001", "PRIMARIA": 14843381, "SECUNDARIA":5480202, "BACHILLERATO": 2764224             
            },
			{"AÑO": "2002", "PRIMARIA": 14857191, "SECUNDARIA":5660070, "BACHILLERATO": 2936101             
            },
			{"AÑO": "2003", "PRIMARIA": 14781327, "SECUNDARIA":5780437, "BACHILLERATO": 3083814             
            },
			{"AÑO": "2004", "PRIMARIA": 14652879, "SECUNDARIA":5894358, "BACHILLERATO": 3185089             
            },
			{"AÑO": "2005", "PRIMARIA": 14548194, "SECUNDARIA":5979256, "BACHILLERATO": 3301555             
            },
			{"AÑO": "2006", "PRIMARIA": 14585804, "SECUNDARIA":6055467, "BACHILLERATO": 3390432             
            },
			{"AÑO": "2007", "PRIMARIA": 14654135, "SECUNDARIA":6116274, "BACHILLERATO": 3471415             
            },
			{"AÑO": "2008", "PRIMARIA": 14815735, "SECUNDARIA":6153459, "BACHILLERATO": 3556858             
            },
			{"AÑO": "2009", "PRIMARIA": 14860704, "SECUNDARIA":6127902, "BACHILLERATO": 3681826             
            },
			{"AÑO": "2010", "PRIMARIA": 14887845, "SECUNDARIA":6137546, "BACHILLERATO": 3811473             
            },
			{"AÑO": "2011", "PRIMARIA": 14909419, "SECUNDARIA":6167424, "BACHILLERATO": 3950126             
            },
			{"AÑO": "2012", "PRIMARIA": 14789406, "SECUNDARIA":6340232, "BACHILLERATO": 4057265             
            },
			{"AÑO": "2013", "PRIMARIA": 14580379, "SECUNDARIA":6571858, "BACHILLERATO": 4602837             
            },          
			
          ]
		    /*url: "./datos2.json",
        	mimeType: 'json'*/
		  ,
         	keys: {
			x: "AÑO",
			value: ["PRIMARIA", "SECUNDARIA", "BACHILLERATO"],

          }
        },
        axis: {
          x: {
            type: 'categorized'
          }
        },
      });
	
	d3.select('#gLineal svg').append('text')
		.attr('x', d3.select('#gLineal svg').node().getBoundingClientRect().width / 2)
		.attr('y', 16)
		.attr('text-anchor', 'middle')
		.style('font-size', '2.2em')
		.text('Grafica de Lineas de 1990 - 2013');	  
		  
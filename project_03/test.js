var tbody = $("#info_table").children("tbody");
var table = tbody.length?tbody : $("#info_table");
  			var row = '<tr>'+
			    '<td>{{stt}}</td>'+
			    '<td>{{name}}</td>'+
			    '<td>{{math}}</td>'+
			    '<td>{{physical}}</td>' +
			    '<td>{{chemistry}}</td>' +
			    '<td>{{mean}}</td>'
			    '<td>{{score}}</td>'
				'</tr>';
			table.append(row.compose({
			    'stt': i,
			    'name': TestScore.name,
			    'math': TestScore.math,
			    'physical': TestScore.physical,
			    'chemistry': TestScore.chemistry,
			    'mean': "?",
			    'score': "?"

			}));


/*Object declaration*/
var TestScore = {
	name: "",
	math: 0,
	physical: 0,
	chemistry: 0
};
var i=0; //Global variable used save number of rows in table

$(document).ready(function(){
  	$("#getInfo").click(function(){
  		var tbody = $("#info_table").children("tbody");
		var table = tbody.length?tbody : $("#info_table");
  		var flag = true;
  		TestScore.name = $("#name").val();
  		TestScore.math = $("#score_m").val();
		TestScore.physical = $("#score_p").val();
		TestScore.chemistry = $("#score_c").val();
		if(TestScore.name == "") {
			flag = false;
		} else {
			flag = true;
		}
		if(TestScore.math>=0 && TestScore.math<=10) {
			flag = true;
		} else {
			flag = false;
		}
		if(TestScore.physical>=0 && TestScore.physical<=10) {
			flag = true;
		} else {
			flag = false;
		}
		if(TestScore.chemistry>=0 && TestScore.chemistry<=10) {
			flag = true;
		} else {
			flag = false;
		}
		if(flag == false) {
			alert("Nhập sai thông tin vui lòng nhập lại");
		} else {
			i++;
			table.append("<tr><th>"+ i + "</th>" + "<th>"
				+ TestScore.name + "</th>" + "<th>" + TestScore.math
				+"</th>" + "<th>" + TestScore.physical + "</th>" +"<th>"
				+ TestScore.chemistry +"</th>" + "<th>" + "?" + "</th>" 
				+"<th>" + "?" + "</th></tr>");
			$("#name").val("");
			$("#score_m").val("");
			$("#score_p").val("");
			$("#score_c").val("");

		}
  });

  	/*Caculator medium score*/
  	$("#mediumScore").click(function(){
  		$("#info_table tr").each(function() {
		    if (!this.rowIndex) return; // skip first row
		    var	score_math = Number(this.cells[2].innerHTML);
		    var score_physical = Number(this.cells[3].innerHTML);
		    var score_chemistry = Number(this.cells[4].innerHTML);
		    this.cells[5].innerHTML = parseFloat((score_math + score_physical + score_chemistry)/3);
		    
		});
  	});

  	/*Find goodStudent*/
  	$("#goodStudent").click(function() {
  		$("#info_table tr").each(function() {
  			if (!this.rowIndex) return; // skip first row
  			if(Number(this.cells[5].innerHTML)>=8.0) {
  				this.cells[6].innerHTML = "Giỏi";
  				$(this).css("color", "red");
  			} else if (this.cells[5].innerHTML>=7 && this.cells[5].innerHTML<8.0) {
  				this.cells[6].innerHTML = "Khá";
  			} else if (this.cells[5].innerHTML>=5 && this.cells[5].innerHTML<=7) {
  				this.cells[6].innerHTML = "Trung bình";
  			} else {
  				this.cells[6].innerHTML = "Yếu";
  			}
  		});
  	});

  	/*Remove last row in table*/
  	$("#cleanRow").click(function() {
  		$('#info_table tr:last').remove();
  		i--;
  	});

  	/*Remove all rows in table but not remove first row*/
  	$("#cleanAll").click(function() {
  		$("#info_table tr").slice(1).remove();
  	});

});





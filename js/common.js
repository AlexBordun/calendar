
function createCalendar (id, year, month) {
				month--;

				
				var date = new Date (year, month, 1);
				var days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
				var div = document.getElementById(id);
				if (div == null) return;
				var table = document.createElement("table");
				div.appendChild(table);
				var tr = document.createElement("tr");
				table.appendChild(tr);
				for (var i = 0; i < days.length; i++) {
					var th = document.createElement("th");
					th.innerHTML = days[i];
					tr.appendChild(th);
				} 

				var tr = document.createElement("tr");
				table.appendChild(tr);
				var count = date.getDay();
				if (count == 0) count = 7;
				for (var i = 1; i < count; i++) {
					var td = document.createElement("td");
					tr.appendChild(td);
				}


				while (true) {
					td = document.createElement("td");
					td.innerHTML = date.getDate();
					if (date.getDay() == 1) {
						tr = document.createElement("tr");
						table.appendChild(tr);
					}
					tr.appendChild(td);
					date.setDate(date.getDate() + 1);
					if ( date.getMonth() !== month ) break;
				}
				var rowcount = table.rows.length;
				var columncount = table.rows[rowcount-1].cells.length;
				if (columncount < 7) {
					for (var i = columncount; i < 7; i++ ) {
						td = document.createElement("td");
						tr.appendChild(td);
					}
				}
				for (var i = 0; i < table.rows.length; i++) {
					table.rows[i].cells[5].setAttribute("style", "color:red");
					table.rows[i].cells[6].setAttribute("style", "color:red");
				}	

			};

			
			
			function Load () {
                var year = document.querySelector("#year");
                var month = document.querySelector("#month");
                
                                
				createCalendar("calendar", year.value, month.value);
				if (month.value > 0 && month.value <= 6 ) document.body.classList.add("one");
				if (month.value >= 7 && month.value < 13) document.body.classList.add("two");
					
			};
function loadXMLDoc()
{
	var top=50;
	var e = document.getElementById("list");
	var strUser = e.options[e.selectedIndex].value;
	var choice=parseInt(strUser,10);
	var xmlhttp;
	var element = document.getElementById("div1");
	if (window.XMLHttpRequest)
	{
	  	xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(choice==1)
	{
		var parent = document.getElementById('paragraph');
		while(parent.firstChild)
		{
			parent.removeChild(parent.firstChild);
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var obj = JSON.parse(xmlhttp.responseText);
				var i=0;
				while(obj.deals[i]!='undefined')
				{
					var para = document.createElement("p");
					para.id="p"+i;
					var element=document.getElementById('paragraph');
					element.appendChild(para);
					showImage(obj.deals[i].imageUrl,100,100,"No Image Available");
					document.getElementById(para.id).innerHTML = "<hr/>" + "Hotel Name:" + " " + obj.deals[i].hotelName + "<br>" + " " + "Hotel Id:" + " " + obj.deals[i].hotelId + "<br>" + "Title:" + obj.deals[i].title +"<br>" + "Hotel Description:" + " " + obj.deals[i].description + "<br>" + " " +"Booking Period:"+"<br>" + "&nbsp;&nbsp;&nbsp&nbsp    Start:" + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp    Date:" + obj.deals[i].bookingPeriod.start.date +"<br>"+"&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp Time:" + obj.deals[i].bookingPeriod.start.time+"<br>" +"&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp System Date Time:" + obj.deals[i].bookingPeriod.start.systemDateTime+"<br>" +"&nbsp;&nbsp;&nbsp&nbsp    End:" + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp    Date:" + obj.deals[i].bookingPeriod.end.date +"<br>"+"&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp Time:" + obj.deals[i].bookingPeriod.end.time+"<br>" +"&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp;&nbsp&nbsp System Date Time:" + obj.deals[i].bookingPeriod.end.systemDateTime+"<br>" + "Fare:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Total Amount:" + obj.deals[i].fare.totalAmount+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Code:" + obj.deals[i].fare.currencyCode+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Symbol:" + obj.deals[i].fare.currencySymbol +"<br>"+ "Location:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp City:" +obj.deals[i].location.city + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Code:" +obj.deals[i].location.code+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp State:" +obj.deals[i].location.state + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Country:" + obj.deals[i].location.country;
					i++;
				}
			}
		}
		function showImage(src,width,height,alt)
		{
			var img = document.createElement("img");
			img.src = src;
			img.width=width;
			img.height=height;
			img.alt=alt;
			var element=document.getElementById('paragraph');
			element.appendChild(img);
		}
		xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=0fchwyho1hw2uwhfr3dsjq21&$filter=Type eq 'hotel'",true);
		xmlhttp.send();
	}
	if(choice==2)
	{
		var parent = document.getElementById('paragraph');
		while(parent.firstChild)
		{
			parent.removeChild(parent.firstChild);
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var obj = JSON.parse(xmlhttp.responseText);
				var i=0;
				while(obj.deals[i]!='undefined')
				{
					var para = document.createElement("p");
					para.id="p"+i;
					var currentId=para.id;
					var element=document.getElementById('paragraph');
					element.appendChild(para);
					//document.body.appendChild(para);
					document.getElementById(para.id).innerHTML = "<hr/>" + "Rental Company Name:" + " " + obj.deals[i].rentalCompanyName + "<br>" + " " + "Rental Company Code:" + " " + obj.deals[i].rentalCompanyCode + "<br>" + "Title:" + obj.deals[i].title +"<br>" + "Booking Period:" + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp    Date:" + obj.deals[i].bookingPeriod.start.date +"<br>"+"&nbsp;&nbsp;&nbsp&nbsp Time:" + obj.deals[i].bookingPeriod.start.time+"<br>" + "Fare:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Total Amount:" + obj.deals[i].fare.totalAmount+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Code:" + obj.deals[i].fare.currencyCode+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Symbol:" + obj.deals[i].fare.currencySymbol +"<br>"+ "Location:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp City:" +obj.deals[i].location.city + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Code:" +obj.deals[i].location.code+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp State:" +obj.deals[i].location.state + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Country:" +obj.deals[i].location.country;
					i++;

				}
			}
		}
		xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=0fchwyho1hw2uwhfr3dsjq21&$filter=Type eq 'car'",true);
		xmlhttp.send();
	}
}
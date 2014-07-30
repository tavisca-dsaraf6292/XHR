var loadXMLDoc= function()
{
	var top=50;
	var e = document.getElementById("options");
	var strUser = e.options[e.selectedIndex].value;
	var choice=parseInt(strUser,10);
	var xmlhttp;
	//var element = document.getElementById("div1");
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
					var element=document.getElementById('paragraph');
					var hotelName=obj.deals[i].hotelName;
					if(hotelName=='undefined')
						element.innerHTML=element.innerHTML+templateMaker(obj.deals[i].hotelTitle,obj.deals[i].description,obj.deals[i].imageUrl);
					else
						element.innerHTML=element.innerHTML+templateMaker(obj.deals[i].hotelName,obj.deals[i].description,obj.deals[i].imageUrl);
					i++;
				}
			}
		}
		xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=xv3jbfbpvqjl4wnlq2qr11vw&$filter=Type eq 'hotel'",true);
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
					document.getElementById(para.id).innerHTML = "<div class='container car-container'>" + "<hr/>" + "Rental Company Name:" + " " + obj.deals[i].rentalCompanyName + "<br>" + " " + "Rental Company Code:" + " " + obj.deals[i].rentalCompanyCode + "<br>" + "Title:" + obj.deals[i].title +"<br>" + "Booking Period:" + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp    Date:" + obj.deals[i].bookingPeriod.start.date +"<br>"+"&nbsp;&nbsp;&nbsp&nbsp Time:" + obj.deals[i].bookingPeriod.start.time+"<br>" + "Fare:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Total Amount:" + obj.deals[i].fare.totalAmount+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Code:" + obj.deals[i].fare.currencyCode+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp Currency Symbol:" + obj.deals[i].fare.currencySymbol +"<br>"+ "Location:" +"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp City:" +obj.deals[i].location.city + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Code:" +obj.deals[i].location.code+"<br>"+ "&nbsp;&nbsp;&nbsp&nbsp State:" +obj.deals[i].location.state + "<br>" + "&nbsp;&nbsp;&nbsp&nbsp Country:" +obj.deals[i].location.country+"</div>";
					i++;
				}
			}
		}
		xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=xv3jbfbpvqjl4wnlq2qr11vw&$filter=Type eq 'car'",true);
		xmlhttp.send();
	}
}
function templateMaker(hotelName,description,imgUrl)
{
	var template="<div class='container hotel-container'><div class='row'><div class='col-lg-12'><h2 class='hotelName'>" + hotelName + "</h2></div></div><div class='row'><div class='col-lg-7 description'><h4>"+description+"</h4></div><div class='col-lg-5 ' ><img class='hotel-image' src='"+imgUrl+"''></div></div></div>";
	return template;
}

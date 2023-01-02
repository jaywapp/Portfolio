class Summary {
	constructor(name, company, comment, term){
		this.name = name;
		this.company = company;
		this.comment = comment;
		this.term = term;
	}	

	ToHtml(){

		let div = document.createElement("div");

		div.setAttribute("id", "summary");

		let role = document.createElement("div");
		role.setAttribute("id", "role");
		let roleText = document.createTextNode(this.name);
		role.appendChild(roleText);

		let company = document.createElement("div");
		company.setAttribute("id", "company");
		let companyText = document.createTextNode(this.company);
		company.appendChild(companyText);

		let comment = document.createElement("div");
		comment.setAttribute("id", "comment");
		let commentText = document.createTextNode(this.comment);
		comment.appendChild(commentText);

		let term = document.createElement("div");
		term.setAttribute("id", "term");
		let termText = document.createTextNode(this.term);
		term.appendChild(termText);

		div.appendChild(role);
		div.appendChild(company);
		div.appendChild(comment);
		div.appendChild(term);

		return div;
	}
}

class Detail{
	constructor(items){
		this.items = items;
	}

	ToHtml(){

		let div = document.createElement("div");

		div.setAttribute("id", "detail");

		let ul = document.createElement("ul");

		for(i=0; i < this.items.length; i++){

			let li = document.createElement("li");
			let text = document.createTextNode(this.items[i]);

			li.appendChild(text);
			ul.appendChild(li);
		}

		div.appendChild(ul);

		return div;
	}
}

class Role {
	constructor(year, link, summary, detail){
		this.year = year;
		this.link = link;
		this.summary = summary;
		this.detail = detail;
	}

	ToHtml(){

		let div = document.createElement("div");
		div.setAttribute("id", "row");

		let year = document.createElement("div");
		year.setAttribute("id", "year");
		let yearText = document.createTextNode(this.year);

		year.appendChild(yearText);

		let itemList = document.createElement("div");
		itemList.setAttribute("id", "itemList");

		let link = document.createElement("a");
		link.setAttribute("href", this.link);

		link.appendChild(this.summary.ToHtml());
		link.appendChild(this.detail.ToHtml());

		itemList.appendChild(link);

		div.appendChild(year);
		div.appendChild(itemList);

		return div;
	}
}

function LoadRoles( xml ) { // ( xml ) 객체 넘겨받기
	xmlDoc = xml.responseXML; 
	
	let roles = [];
	let roleElements = xmlDoc.getElementsByTagName("Role");
	
	for(i=0; i < roleElements.length; i++) {

		let role = LoadRole(roleElements[i]);
		roles.push(role);
	}

	return roles;
}

function LoadRole( xml ) {

	let summaryElement = xml.getElementsByTagName("Summary")[0];
	let detailElement = xml.getElementsByTagName("Detail")[0];

	let summary = LoadSummary(summaryElement);
	let detail = LoadDetail(detailElement);
	let year = xml.getAttribute("Year");
	let link = xml.getAttribute("Link");

	return new Role(year, link, summary, detail);
}

function LoadSummary( xml ){

	let name = xml.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
	let company = xml.getElementsByTagName("Company")[0].childNodes[0].nodeValue;
	let comment = xml.getElementsByTagName("Comment")[0].childNodes[0].nodeValue;
	let term = xml.getElementsByTagName("Term")[0].childNodes[0].nodeValue;

	return new Summary(name, company, comment, term);
}

function LoadDetail( xml ){

	let array = [];

	let items = xml.getElementsByTagName("Item");

	for(i=0; i < items.length; i++){
		array.push(items[i].childNodes[0].nodeValue);
	}

	return new Detail(array);	
}

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
	
	if(this.readyState == 4 && this.status == 200){

		let roles = LoadRoles( this ); // this == xhttp 
		let grid = document.getElementsByClassName('grid')[0];

		if(grid !== null){
				for(i=0; i < roles.length; i++){
					let role = roles[i];
					grid.appendChild(role);
				}
		}
	}
}

xhttp.open("GET", "../roles/Roles.xml", true);
xhttp.send();



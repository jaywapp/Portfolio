/*eslint-env browser */

function FromRole(role) {
    let div = document.createElement("div");
    div.setAttribute("id", "role");

    let text = document.createTextNode(role);
    div.appendChild(text);

    return div;
}

function FromCompany(company) {
    let div = document.createElement("div");
    div.setAttribute("id", "company");

    let text = document.createTextNode(company);
    div.appendChild(text);

    return div;
}

function FromComment(comment) {
    let div = document.createElement("div");
    div.setAttribute("id", "comment");

    let text = document.createTextNode(comment);
    div.appendChild(text);

    return div;
}

function FromTerm(term) {
    let div = document.createElement("div");
    div.setAttribute("id", "term");

    let text = document.createTextNode(term);
    div.appendChild(text);

    return div;
}

function FromSummary(summary) {
    let div = document.createElement("div");
    div.setAttribute("id", "summary");

    div.appendChild(FromRole(summary.Role));
    div.appendChild(FromCompany(summary.Company));
    div.appendChild(FromComment(summary.Comment));
    div.appendChild(FromTerm(summary.Term));

    return div;
}

function FromDetail(detail) {
    let div = document.createElement("div");
    div.setAttribute("id", "detail");

    let ul = document.createElement("ul");

    for (var i = 0; i < detail.length; i++) {
        let item = detail[i];

        let li = document.createElement("li");
        let text = document.createTextNode(item);

        li.appendChild(text);
        ul.appendChild(li);
    }

    div.appendChild(ul);

    return div;
}

function FromYear(year) {
    let div = document.createElement("div");
    div.setAttribute("id", "year");

    let text = document.createTextNode(year);
    div.appendChild(text);

    return div;
}

function FromItemList(link, summary, detail) {
    let div = document.createElement("div");
    div.setAttribute("id", "itemlist");

    let a = document.createElement("a");
    a.setAttribute("href", link);

    let item = document.createElement("div");
    item.setAttribute("id", "itemlink");
    item.appendChild(summary);
    item.appendChild(detail);

    a.appendChild(item);
    div.appendChild(a);

    return div;
}

function FromRole(year, link, summary, detail) {

    let div = document.createElement("div");
    div.setAttribute("id", "row");

    div.appendChild(FromYear(year));
    div.appendChild(FromItemList(link, summary, detail));

    return div;
}

function Write( roles )
{
    for (var i = 0; i < roles.length; i++) {

        let role = roles[i];
    
        var year = role.Year;
        var link = role.Link;
        var summary = role.Summary;
        var detail = role.Detail;
    
        var div = FromRole(year, link, summary, detail);
        var element = document.getElementsByClassName("grid");
    
        element.appendChild(div);
    };
}

const fs = require('fs');
const jsonFile = fs.readFileSync('Roles.json');
const json = JSON.parse(jsonFile);

Write(json.Roles);

var supprime = "";
var entreepanier = [];
var soustotal = 0;
var total = 0;
var click = 0;
function voirpanier() {
  if (click == 0) {
    document.getElementById("vuepanier").style.display = "block";
    document.getElementById("ajtpanier").style.display = "none";
    click = 1;
  } else if (click == 1) {
    document.getElementById("vuepanier").style.display = "none";
    click = 0;
  }
}
function changeurl() {
  document.getElementById("ajtpanier").innerHTML =
    "Nous vous remercions pour votre achat et votre confiance et &eacute;sp&eacute;rons vous revoir bient&ocirc;t<button  style='position:absolute;bottom:5px;margin-left:auto;margin-right:auto;' onclick=document.getElementById('ajtpanier').style.display='none';>&nbsp;fermer la fenetre&nbsp;</button>";
  document.getElementById("ajtpanier").style.display = "block";
  document.getElementById("vuepanier").innerHTML =
    "&nbsp;Votre panier est vide&nbsp;";
  document.getElementById("panier").style.background = "#757575";
  ajoutepanier("vide");
}
function fermeajoutepanier() {
  document.getElementById("ajtpanier").style.display = "none";
}
function fermevoirpanier() {
  document.getElementById("vuepanier").style.display = "none";
}
function supprimer(incre) {
  supprime = incre;
  ajoutepanier("supp");
}
function modifquant(modif) {
  quantmodif = document.getElementById("retrait" + modif).value;
  ajoutepanier("modifier", quantmodif, modif);
}
function ajoutepanier(nettoie, valeur1, valeur2) {
  if (nettoie == undefined) {
    click = 1;
    voirpanier();
  }
  if (nettoie == "vide") {
    entreepanier = [];
  } else {
    if (nettoie == "supp") {
      var afficheid = "";
      var affichetaille = "";
      var affichequantite = "";
      var afficheprix = "";
      var affichesoustotal = "";
      var afficheincrementation = "";
      var i = 0;
      var valide = 1;
      var total = 0;
      entreepanier.splice(supprime, 1);
    } else if (nettoie == "modifier") {
      var afficheid = "";
      var affichetaille = "";
      var affichequantite = "";
      var afficheprix = "";
      var affichesoustotal = "";
      var afficheincrementation = "";
      var i = 0;
      var valide = 1;
      var total = 0;
      modification = parseInt(valeur1);
      idpannier = valeur2;
      entreepanier[idpannier].quantiteta = modification;
    } else {
      document.getElementById("repquantite" + idarticle).innerHTML = "&nbsp";
      document.getElementById("reptaille" + idarticle).innerHTML = "&nbsp;";
      var article = document.getElementById("nomarticle" + idarticle).value;
      var quantite = parseInt(
        document.getElementById("quantite" + idarticle).value
      );
      var taille = document.getElementById("taille" + idarticle).value;
      var prix =
        parseInt(document.getElementById("prix" + idarticle).value * 100) / 100;
      if (quantite == 0) {
        document.getElementById("repquantite" + idarticle).innerHTML =
          "Vous n&apos;avez pas choisit la quantit&eacute;";
      }
      if (taille == 0) {
        document.getElementById("reptaille" + idarticle).innerHTML =
          "Vous n&apos;avez pas choisit la taille";
      }
      if (quantite != 0 && taille != 0) {
        if (quantite > 1) {
          var message =
            " ont bien &eacute;t&eacute; ajout&eacute; &agrave; votre panier";
        } else {
          var message =
            " a bien &eacute;t&eacute; ajout&eacute; &agrave; votre panier";
        }
        var afficheid = "";
        var affichetaille = "";
        var affichequantite = "";
        var afficheprix = "";
        var affichesoustotal = "";
        var afficheincrementation = "";
        var i = 0;
        var valide = 0;
        while (entreepanier[i] != undefined) {
          if (
            entreepanier[i].id == idarticle &&
            entreepanier[i].tailleta == taille
          ) {
            entreepanier[i].quantiteta = entreepanier[i].quantiteta + quantite;
            valide = 1;
          }
          i++;
        }
      }
      if (valide == 0) {
        entreepanier.push({
          id: idarticle,
          tailleta: taille,
          quantiteta: quantite,
          prixta: prix,
          incrementationta: "",
        });
      }
    }
    i = 0;
    total = 0;
    var retirearticle = "";
    while (entreepanier[i] != undefined) {
      entreepanier[i].incrementationta = i;
      soustotal = entreepanier[i].quantiteta * entreepanier[i].prixta;
      soustotal = parseInt(soustotal * 100) / 100;
      total = total + soustotal;
      total = parseInt(total * 100) / 100;
      var retquant = "";
      for (q = 1; q < entreepanier[i].quantiteta; q++) {
        retquant += "<option value=" + q + ">" + q + "</option>";
      }
      retirearticle +=
        "<form id='retarticle" +
        i +
        "'><select id='retrait" +
        i +
        "' onchange=modifquant(" +
        i +
        ");><option value=" +
        entreepanier[i].quantiteta +
        ">" +
        entreepanier[i].quantiteta +
        "</option>" +
        retquant +
        "</select></form>";
      afficheid += "<br>rob" + entreepanier[i].id;
      affichetaille += "<br>" + entreepanier[i].tailleta;
      affichequantite = retirearticle;
      afficheprix += "<br>" + entreepanier[i].prixta;
      affichesoustotal += "<br>" + soustotal;
      afficheincrementation +=
        '<br><button onclick="supprimer(' + i + ');">X</button>';
      incrementation = entreepanier[i].incrementationta;
      i++;
    }
    if (total == 0) {
      document.getElementById("vuepanier").innerHTML =
        "&nbsp;Votre panier est vide&nbsp;";
      document.getElementById("panier").style.background = "#757575";
    } else {
      document.getElementById("vuepanier").innerHTML =
        "<div style='float:left;margin:5px;'>ref" +
        afficheid +
        "</div><div style='float:left;margin:5px;'>taille" +
        affichetaille +
        "</div><div style='float:left;margin:5px;'>prix" +
        afficheprix +
        "</div><div style='float:left;margin:5px;'>quantit&eacute;" +
        affichequantite +
        "<br>total:</div><div style='float:left;margin:5px;'>sous total" +
        affichesoustotal +
        "<br><br>" +
        total +
        "&euro;</div><div style='float:left;margin:5px;'>suppr." +
        afficheincrementation +
        "</div><br><br><button onclick='fermevoirpanier();';>&nbsp;continuez vos achats&nbsp;</button><button onclick='changeurl();' style='position:absolute;right:10px;');>&nbsp;validez votre panier&nbsp;</button>";
      document.getElementById("panier").style.background = "#D5563B";
    }
    if (nettoie == undefined) {
      document.getElementById("ajtpanier").style.display = "block";
      document.getElementById("ajtpanier").innerHTML =
        quantite +
        " " +
        article +
        " taille " +
        taille +
        " " +
        message +
        "<br><br><button onclick='fermeajoutepanier();';>&nbsp;continuez vos achats&nbsp;</button><button onclick='changeurl();' style='position:absolute;right:10px;');>&nbsp;validez votre panier&nbsp;</button>";
      document.getElementById("article" + idarticle).reset();
    } else if (nettoie == "vide") {
      document.getElementById("ajtpanier").style.display = "block";
    } else {
      document.getElementById("ajtpanier").style.display = "none";
    }
  }
}

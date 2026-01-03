const users = [
  { name: "Rafifah", password: "ENFORUN2025" },
  { name: "Aya", password: "BYEOL" },
  { name: "Hana", password: "KAKIVAN" },
  { name: "Fairuz", password: "AAABIGH" },
  { name: "Bhekti", password: "kholit" },
  { name: "Naila", password: "NailaSAT25" },
  { name: "Sareu", password: "SareuSAT25" },
  { name: "Ebo", password: "EBOSAT25" },
  { name: "Mayya", password: "MayyaSAT25" },
  { name: "Kayla", password: "ArkeylaSAT25" },
  { name: "Mandi", password: "MamanSAT25" },
  { name: "Tisya", password: "TisyaSAT25" },
  { name: "Bella", password: "BellaSAT25"},
  { name: "Ayla",  password: "ATLETSILAT"},
  { name: "Akak",  password: "AKAKSUKANALA"},
<<<<<<< HEAD
  { name: "karina", password: "halodek"},
  { name: "demo", password: "123"},
  { name: "lila", password: "lilaSAT25"},
  { name: "faiq", password: "faiqSAT25"}
=======
  { name: "karina", password: "halodek"}
>>>>>>> 891dc91d8688a83830819aad9ba8140c329a3568
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const foundUser = users.find(
    user => user.name === username && user.password === password
  );

  if (foundUser) {
    // simpan nama user
    localStorage.setItem("user", username);
    window.location.href = "main.html";
  } else {
    alert("wrong password or name");
  }
}

import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topics = document.createElement("div");
  tabBox.classList.add("topics");
  konu.forEach(element => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = item ;
    tabBox.appendChild(tab);
  
  });
  return topics ;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const secici1 = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      const konuDinamik = response;
      console.log(konuDinamik);
      secici1.appendChild(Tablar(response.data.konular));
      console.log(response);
    })
    .catch((error) => {
      console.log("Error" + error);
    });
}

export { Tablar, tabEkleyici }

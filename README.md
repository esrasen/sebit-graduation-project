<p align="center"> 
  <img src="docs/images/sebit.png" alt="HAR Logo" width="80px" height="80px">
    <img src="docs/images/coderspace.jpeg" alt="HAR Logo" width="80px" height="80px">
</p>

<h1 align="center"> Sebit Front End Bootcamp </h1>
<h3 align="center"> Bitirme Projesi </h3>

</br>

<p align="center"> 
  <img src="docs/images/bg.jpg" alt="Sebit" width="60%" height="30%">
</p>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: İçerik</h2>

<details open="open">
  <summary>İçerik</summary>
  <ol>
    <li><a href="#deploy"> ➤ Proje Deploy Adresi</a></li>
    <li><a href="#hakkinda"> ➤ Proje Hakkında</a></li>
    <li><a href="#teknolojiler"> ➤ Kullanılan Teknolojiler</a></li>
    <li><a href="#kurulum"> ➤ Kurulum</a></li>
    <li><a href="#endpoint"> ➤ Endpointler</a></li>
    <li><a href="#web"> ➤ Web Ekran Görüntüsü</a></li>
    <li><a href="#mobil"> ➤ Mobil Ekran Görüntüsü</a></li>      
    <li><a href="#iletisim"> ➤ İletişim ve Bilgiler</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)
<h2 id="deploy"> :pencil: Proje Deploy Adresi</h2>
<p>
<b>Proje Production:</b> <a href="https://sebit-graduation-project.herokuapp.com/home">https://sebit-graduation-project.herokuapp.com</a><br/>
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<!-- ABOUT THE HOMEWORK -->
<h2 id="hakkinda"> :pencil: Proje Hakkında</h2>

<p align="justify"> 
<b>Proje Bilgileri:</b><br/>
<pre>
I.	Proje datası olarak verilen json dosyalarını kullanabilirsiniz (categories.json, posts.json)
II.	Datalara ek olarak tasarımda yer alan görseller için /resources klasörü içerisindeki dosyaları kullabilirsiniz.
III.	Tüm geliştirme tasarımı, /screenshots klasörü altında yer alan ekran gürüntüleri esas alınarak yapılacaktır.
IV.	Uygulama 4 farklı sayfadan oluşacak.
a.	Anasayfa(Kategoriler ikonları ile birlikte gösterilecek)
i.	İkonlar /resources/icons altında yer almaktadır.
b.	Kategori sayfası (İlgili kategoriye ait postlar listelenecek)
i.	Kategoriye ait postlar tarihe göre yakından uzağa olacak şekilde sıralanmalıdır.
ii.	Ekran görüntüsündeki gibi; breadcrumb, kategori ikonu, kategori adı, açıklaması ve kategorideki toplam post sayısı gösterilecek.
iii.	Burada postlar listelenirken post açıklamasının en çok 280 karakteri gösterilecek.
iv.	Postun başlığına veya read more a tıklanarak postun detayına gidilebilecek.
v.	Her postun alt kısmında, postun yazarı ve tarih bilgisi gösterilen formatta yer alacak.
vi.	Yazar görseli için /images/profile.png kullanılabilir.
c.	Post detay sayfası
i.	Post açıklamasının tamamı gösterilecek.
ii.	Postun altında yazar, tarih bilgisi ve posta ait etiketler ekran görüntüsündeki gibi gösterilecek.
d.	Arama sonuçları sayfası 
i.	Her sayfanın üst kısmında yer alan arama kutusundan arama yapıldığında, postun başlığında veya açıklamasında arama metninin geçtiği tüm postlar bu sayfada listelenecek.
ii.	Listelenen postlar tarihe göre yakından uzağa olacak şekilde sıralanmalıdır.
iii.	Yine bu sayfada listelenen postlara tıklandığında post detay sayfasına gidecek.
V.	Sayfanın container(orta) genişliği 1020px olarak belirlenebilir.
VI.	Üst kısımdaki arama kutusu tüm sayfalarda yer alacaktır.
VII.	Proje geliştirilirken bootstrap, Tailwind CSS benzeri frameworkler kullanılabilir.
VIII.	Proje Angular Framework kullanarak geliştirilecektir.

</pre><br/><br/>
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<!-- PREREQUISITES -->
<h2 id="teknolojiler"> :fork_and_knife: Kullanılan Teknolojiler</h2>

[![made-with-angular](https://img.shields.io/badge/Made%20with-angular-critical.svg)](https://www.python.org/) <br />
[![made-with-css](https://img.shields.io/badge/Made%20with-css-orange.svg)](https://www.python.org/) <br />
[![made-with-bootstrap5](https://img.shields.io/badge/Made%20with-Bootstrap5-blue.svg)](https://www.python.org/) <br />
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-success.svg)](https://www.python.org/) <br />
[![made-with-html5](https://img.shields.io/badge/Made%20with-html5-red.svg)](https://www.python.org/) <br />
[![made-with-jsonServer](https://img.shields.io/badge/Made%20with-jsonServer-blueviolet.svg)](https://www.python.org/) <br />
[![made-with-material](https://img.shields.io/badge/Made%20with-materialUI-informational.svg)](https://www.python.org/) <br />

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<!--  -->
<h2 id="kurulum"> :hammer: Kurulum</h2>

<h4>Gereklilikler</h3>

<p align="justify"> 
1. Npm 8.11.0<br/>
2. Nodejs 16.17.0 LTS
</p><br/>

<h4>Ön Bilgiler</h3>

<p align="justify"> 
1. Backend Fake API Db Port: 3000<br/>
2. Frontend Port: 4200
</p><br/>

<h4>Kurulum</h3>

<p align="justify"> 
1. Projeyi github adresinden klonlayın:<br/>
<pre>
git clone https://github.com/esrasen/sebit-graduation-project.git
</pre>
2. Projeyi IDE veya varsayılan editörünüz ile açın.<br/>
3. Proje yoluna gidin.:<br/>
<pre>
cd sebit-graduation-project
</pre>
4. Aşağıdaki komutu çalıştırarak proje bağımlılıklarını yükleyin:<br/>
<pre>
npm install --force
</pre>
5. json-server 'i başlatın:<br/>
<pre>
json-server --watch api/db.json 
</pre>
6. Projeyi başlatın:<br/>
<pre>
ng serve
</pre>
7. Tarayıcınızdan projeye girin:<br/>
<pre>
http://localhost:4200
</pre>
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)
<h2 id="endpoint"> :paw_prints: Endpointler</h2>
<p align="justify"> 
Aşağıda tüm endpointler verilmiştir.
</p>


<h4>a) Ana Sayfa</h4>
<table class="demo">
	<caption>Ana Sayfa</caption>
	<thead>
	<tr>
		<th>Method</th>
		<th>URL</th>
		<th>Açıklama</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;GET</td>
		<td>&nbsp;'/'</td>
		<td>&nbsp;301 ile yönlendirme yapar.</td>
	</tr>
	<tr>
		<td>&nbsp;GET</td>
		<td>&nbsp;'/home'</td>
		<td>&nbsp;Ana sayfa ve Tüm Kategoriler</td>
	</tr>
	</tbody>
</table>

<br/> <h4>b) Kategoriler </h4>

<table class="demo">
	<caption>Kategoriler</caption>
	<thead>
	<tr>
		<th>Method</th>
		<th>URL</th>
		<th>Açıklama</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;GET</td>
		<td>&nbsp;'/home/category/1'</td>
		<td>1 id değerli kategorideki postları getirir.</td>
	</tr>
	</tbody>
</table>

<br/> <h4>c) Post</h4>
<table class="demo">
	<caption>Post</caption>
	<thead>
	<tr>
		<th>Method</th>
		<th>URL</th>
		<th>Açıklama</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;GET</td>
		<td>&nbsp;'/post/1'</td>
		<td>1 id değerli postu getirir</td>
	</tr>
	</tbody>
</table>

<br/> <h4>d) Aramalar</h4>

<table class="demo">
	<caption>Aramalar</caption>
	<thead>
	<tr>
		<th>Method</th>
		<th>URL</th>
		<th>Açıklama</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;GET</td>
		<td>&nbsp;'/search/where'</td>
		<td>'where' arama terimini postlarda arar.</td>
	</tr>
	</tbody>
</table>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<h2 id="web"> :dart: Web Ekran Görüntüsü</h2>
1.Ana Sayfa
<p align="center">
  <img src="docs/images/1.png" alt="" width="75%" height="75%">
</p><br/>

2.Kategoriler
<p align="center">
  <img src="docs/images/2.png" alt="" width="75%" height="75%">
</p><br/>

3.Post Detay
<p align="center">
  <img src="docs/images/3.png" alt="" width="75%" height="75%">
</p><br/>

4.Arama (where)
<p align="center">
  <img src="docs/images/4.png" alt="" width="75%" height="75%">
</p><br/>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<h2 id="mobil"> :dart: Mobil Ekran Görüntüsü</h2>
1.Ana Sayfa
<p align="center">
  <img src="docs/images/5.png" alt="" width="75%" height="75%">
</p><br/>

2.Kategoriler
<p align="center">
  <img src="docs/images/6.png" alt="" width="75%" height="75%">
</p><br/>

3.Post Detay
<p align="center">
  <img src="docs/images/7.png" alt="" width="75%" height="75%">
</p><br/>

4.Arama (its)
<p align="center">
  <img src="docs/images/8.png" alt="" width="75%" height="75%">
</p><br/>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)

<h2 id="iletisim"> :scroll: İletişim ve Bilgiler</h2>

✤ <a href="https://github.com/esrasen">GitHub</a> <br>
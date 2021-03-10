# Atolye15BootcampFinalProject

# Atolye15BootcampFinalProject

## Son Harfinden Kelime Türetme Oyunu

Oyun, kelimenin son harfinden yeni bir kelime türeterek oynanıyor. Kelime içeriğimizin Türkçe isimler

olduğunu varsayarsak şöyle bir sequence oluşuyor;

#### Hasan -> Niyazi -> İbrahim -> Mustafa -> Ahmet -> …

Tabii ki yarışmacıların da daha önce söylenen terimleri tekrar söylemesi yasak ve belirli bir süre içinde

zinciri devam ettirmesi gerekiyor. Senden de bunu JavaScript ve webkit’in Speech Recognition ile

Speech Synthesis Utterance özelliklerini kullanarak geliştirmeni bekliyoruz.

Mikrofon ve hoparlör sayesinde kişi bilgisayar ile bu oyunu oynayabilecek. Belirttiğimiz gibi iki tarafın

da aynı kelimeleri tekrar kullanmaları yasak. Oyunun daha keyifli olabilmesi için bilgisayara da %30

oranında kelime bulamama rastgeleliği eklersen harika olur.

Tasarım burada hiç önemli değil. Sadece oynayan kullanıcının kelimeyi türeteceği son kelimenin

ekranda yazması ve kaç saniye içinde zinciri devam ettirmesi gerektiğini gösteren bir timer koyman

yeterli olacak.

### Oyunun akışı şu şekilde olacak;

- Oyuna başla

- Mikrofon kullanımı için izin iste

- Bilgisayar için rastgele bir kelime seç ve ekranda göster (Örnek: Ahmet)

- Kullanıcının mikrofonunu dinle ve 8 saniye içinde ondan **T**​ ​harfi ile başlayan bir isim bekle

  - Kullanıcı doğru bir isim söylediyse; tekrar bilgisayarın seçtiği kelimeyi ekranda göster

  ve timerı başlat. Burada bilgisayara rastgele bir dusunme suresi ekleyebilirsin.

  - Kullanıcı yanlış bir isim söylediyse; oyunu kaybettin diye göster ve zincirde kaç kelime

  ilerlerdiklerini göster,

  - Kullanıcı daha önce söylenmiş bir isim söylediyse; oyunu kaybettin diye göster ve

  zincirde kaç kelime ilerlerdiklerini göster,

- Bilgisayar da %30 oranında kelime hatırlayamayabilir dolayısıyla oyuncu oyunu kazanabilir. Bu

durumda oyunu kazandın diye göster ve zincirde kaç kelime ilerlerdiklerini göster.

Kullanacağın isim veritabanını soru icinde JSON halinde bulabilirsin.

Bu oyuna istediğin gibi yeni özellik ekleyebilir ya da yukarıda bahsedilen akıştan istediğin adımı

çıkarabilirsin.

1. Örnek yeni özellik: Bilgisayar zorluk derecesi. Oyuna başlamadan önce kullanıcı rakibinin güç seviyesini seçebilir.

2. Örnek yeni özellik: Oyunun başka dilleri de desteklemesi. Oyuna başlamadan önce kullanıcı oyunu hangi dilde oynamak istediğini seçebilir.

3. Örnek yeni özellik: Scoreboard. Bir backend’e bağlanıp puan sistemi koyulabilir.

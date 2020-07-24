import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  collapseElements: CollapseElement [];
  constructor() {
    this.collapseElements = [];
    const collapseElem0 = new CollapseElement('Hogyan is működik a vérnyomás?', 'A szervezet vérellátásának fenntartásában,' +
        ' a vér keringetésében a perifériás erekben a szív vesz részt.' +
        ' A szív pumpafunkciója segíti a vér áramlását az artériás rendszerben.' +
        ' A tüdőereken keresztül pedig oxigénnel dúsított vérre cserélődik az „elhasználódott vér”.' +
        ' A minden egyes szívösszehúzódás során továbbított vér mennyiségének (pulzustérfogat)' +
        ' és a percenkénti szívösszehúzódások számának (pulzus) szorzata adja meg a perctérfogatot,' +
        ' vagyis az egy perc alatt a nagyvérkörbe áramló vér mennyiségét.' +
        ' A nagyerekbe kerülő vér nyomást gyakorol az egyébként élettanilag rugalmas erek falára.' +
        ' Ez adja a vérnyomást, mely mérhető.' +
        ' A vérnyomás legmagasabb értéke a szívösszehúzódás alatt,' +
        ' legalacsonyabb értéke a szív elernyedése alatt alakul ki.' +
        ' Ez a két érték adja a mérhető vérnyomás felső (szisztolés érték),' +
        ' illetve alsó (diasztolés érték) értékét.' +
        ' A szisztolés nyomások értékét pedig alapvetően az erek falának rugalmassága' +
        ' (pl. meszes ereknél csökken a rugalmasság),' +
        ' illetve a percenkénti nagyerekbe pumpált vérmennyiség határozza meg.' +
        ' A vérnyomás szabályozásában ezenfelül számos szabályozó rendszer vesz részt.' +
        ' Ez a szabályozás elsősorban hormonális úton történik.' +
        ' Az élettani vérnyomást befolyásolja a hormonális rendszer állapota,' +
        ' a napszak, a fizikai aktivitás, az érzelmi állapot, az ébrenléti állapot,' +
        ' a fájdalom, a test folyadéktartalma, az étkezés, de még a testhelyzet is.\n' +
        '\n' +
        'Részletek: https://www.webbeteg.hu/cikkek/egeszseges/23355/vernyomas')
    this.collapseElements.push(collapseElem0)
    const collapseElem1 = new CollapseElement('Mi az a vérnyomásmérő?', 'A vérnyomást vérnyomásmérő készülékekkel mérjük.' +
        ' Egy ilyen készülék tipikusan két alkotórésszel rendelkezik, a felfújható,' +
        ' kart körbevevő, a páciens szívével körülbelül egy magasságba felhelyezendő mandzsettával' +
        ' és a mérőeszközzel, ami a mandzsetta nyomását méri.\n' +
        '\n' +
        'A vérnyomásmérő két vérnyomnyomási értéket nér: a szisztolés és a diasztolés értéket.' +
        ' A szisztolés vérnyomás magasabb, mivel azt a nyomást mutatja,' +
        ' ami a szív összehúzódásakor alakul ki az artériákban,' +
        ' míg a diasztolés vérnyomás a szív pihenése és vérrel való feltöltődése közben mérhető nyomást jelzi.' +
        ' Így például a vérnyomás lehet 120/80 értékű.\n' +
        '\n' +
        'A vérnyomásmérők lehetnek kézi vagy digitális készülékek,' +
        ' de az otthoni vérnyomásmérők általában digitálisak' +
        ' és a mandzsetta karra történő felhelyezésén kívül a teljes mérési folyamat automatizált.\n' +
        '\n' +
        'A mérés indításakor a mandzsetta felfúvódik és a véráramot átmenetileg elzárva, szorosan rögzül a karon,' +
        ' majd egy szelep kinyitásával leenged.' +
        ' Amikor a mandzsetta által kifejtett nyomás eléri a szisztolés vérnyomás értékét,' +
        ' a vér ismét megindul az artériában. Ez rezgéseket kelt, amit a vérnyomásmérő érzékel,' +
        ' és ez alapján rögzíti a szisztolés vérnyomás értékét.' +
        '' + ' A hagyományos, analóg vérnyomásmérőkben a vér által keltett rezgést és hangokat az orvos érzékeli egy sztetoszkóp segítségével.\n' +
        '\n' +
        'A mandzsetta leeresztése közben az általa kifejtett nyomás eléri a diasztolés vérnyomás értékét,' +
        ' ami a vibráció megszűnési szinttel egyenlő.' +
        ' Az érzékelő ezt is észleli, és ismét rögzíti a vérnyomás értékét.')
    this.collapseElements.push(collapseElem1)
    const collapseElem2 = new CollapseElement('A magas vérnyomás kockázatai.', 'A magas vérnyomás népbetegség.' +
        ' A súlyos szív- és érrendszeri betegségek hátterében 80-90 százalékban' +
        ' az emelkedett vérnyomásérték érhető tetten, ezért is szokták a magas vérnyomást' +
        ' „néma gyilkos” elnevezéssel illetni.\n' +
        '\n' +
        'Mivel a magas vérnyomás kezdetben nem okoz panaszt,' +
        ' az emberek többsége egyáltalán nem tud róla, hogy orvoshoz kellene fordulnia.' +
        ' A kezeletlen magas vérnyomás azonban súlyos szövődményeket idézhet elő.' +
        ' A magasvérnyomás-betegség korai felismerése és kezelése döntő jelentőségű mind a betegek életminősége,' +
        ' mind pedig az életkilátásaik tekintetében.')
    this.collapseElements.push(collapseElem2)
    const collapseElem3 = new CollapseElement('Az alacsony vérnyomás kockázatai.', 'Szerencsésebbek azok, akiknek alacsony a vérnyomásuk,' +
        ' mint a magas vérnyomás által érintettek, hiszen az előbbiek várható élettartama magasabb.' +
        ' A rendkívül alacsony vérnyomás azonban olyan kellemetlen tüneteket is okozhat,' +
        ' mint az émelygés, szédülés, ájulás. Az esetek nagy többségében ezek beavatkozást,' +
        ' kezelést nem igényelnek.\n' +
        '\n' +
        'Azonban, ha ezen tünetek tartósan fennállnak, érdemes kivizsgáltatni,' +
        ' hogy milyen kiváltó tényezők állnak a háttérben.')
    this.collapseElements.push(collapseElem3)
    const collapseElem4 = new CollapseElement('Mi az a pulzus?', 'A pulzus az artériáknak (verőereknek) a szívveréssel (normálisan) egyezően fellépő periodikus lüktetése.' +
        ' Mérésekor a szív percenkénti összehúzódásainak a számát (érverés számát) határozzuk meg.' +
        ' Pulzus definíciója: a periférián tapintható szívverések száma.')
    this.collapseElements.push(collapseElem4)
    const collapseElem5 = new CollapseElement('Mit tehetsz a vérnyomásod csökkentése érdekében?', 'Sportoljon,' +
        ' adjon le pár kilót. Sokan használnak olyan gyógyszert, amivel 140 körül tudják tartani a vérnyomásukat.' +
        ' Néhányan még Maratont is futnak, egészségesen élnek,' +
        ' de egyszerűen nem tudják a normális értékhez közel vinni a vérnyomásukat,' +
        ' mivel valószínűleg genetikailag kódolt bennük a magas vérnyomás.')
    this.collapseElements.push(collapseElem5)
    const collapseElem6 = new CollapseElement('Mit tehetsz ha alacsony a vérnyomásod?', 'Ha valaki normalizálni szeretné a túlságosan alacsony vérnyomását,' +
        ' érdemes egy kicsit tanulmányozni azokat a tanácsokat,' +
        ' melyeket a magas vérnyomással küzdők kapnak.' +
        ' Mindazok a dolgok ugyanis, melyek a magasabb vérnyomásúaknak "tiltottak",' +
        ' az alacsonyabb vérnyomású embereknek kifejezetten előnyösek lehetnek.\n' +
        '\n' +
        'A sószegény étrend például nem javasolt azoknak, akiknek gyakrabban alacsony a vérnyomása.' +
        ' Lehetőleg együtt többször kisebb adagokat, így megelőzhetjük,' +
        ' hogy evés után hirtelen lecsökkenjen a vérnyomás.\n' +
        '\n' +
        'Sok ember számára a vérnyomás emelése egyenlő azzal, hogy gyorsan megiszik egy erős kávét.' +
        ' Ez valóban jót tehet az alacsonyabb vérnyomásúaknak,' +
        ' ráadásul, a kávéban számos olyan hatóanyag van,' +
        ' amelyek hozzájárulhatnak az egészségünk megőrzéséhez és a betegségek megelőzéséhez.\n' +
        '\n' +
        'Nem árt azonban figyelembe venni, hogy a kávé nem mindenkinek előnyös,' +
        ' például irritálhatja az érzékenyebb gyomrot.' +
        ' Az alkoholt azonban érdemes kerülnie az alacsony vérnyomásúaknak! A folyadékbevitel,' +
        ' vagyis az elegendő víz nagyon fontos, az enyhe mértékű kiszáradás az alacsony vérnyomás egyik oka.')
    this.collapseElements.push(collapseElem6)
    const collapseElem7 = new CollapseElement('Heves szívverés okai.', 'Ha magasabb vagy éppen alacsonyabb értékeket mérünk,' +
        ' ne ijedjünk meg rögtön, hiszen előfordulhat,' +
        ' hogy a mérés során nem értékeljük helyesen az adatokat.' +
        ' A szakorvos akár egy egyszerű EKG-vizsgálattal is meg tudja állapítani,' +
        ' hogy komoly problémáról vagy egy ideiglenesen fennálló állapotról van-e szó.' +
        ' Ha indokolt, akkor egy kisebb méretű készüléket kötnek össze a mellkasra ragasztott tappancsokkal,' +
        ' amely 24 órán át rögzíti az EKG-jeleket (Holter-monitorozás).' +
        ' Előfordulhat, hogy ingervezetési, ingerképzési zavarról van szó, ennek kivizsgálására a szívgyógyász' +
        ' elektrofiziológus szakorvoshoz irányítja a beteget. A hirtelen halál megelőzése lehet egy' +
        ' ilyen vizsgálat, amely végül a ritmuszavart előidéző elváltozást megszüntető beavatkozáshoz vagy ' +
        'pacemaker beültetéséhez is vezethet. Tanuljuk meg tehát mérni a pulzust,' +
        ' és ne tétovázzunk, hogy kérdéseinkkel orvoshoz forduljunk. Rendszeres sporttal elérhető,' +
        ' hogy a nyugalmi pulzusszámunk csökkenjen ')
    this.collapseElements.push(collapseElem7)

  }

  ngOnInit(): void {
  }

}
export class CollapseElement {
  constructor(public title: string, public text: string) {
  }
}





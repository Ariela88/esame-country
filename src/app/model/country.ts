
export interface Country {
  name: CountryName
  tld?: string[]
  cca2: string
  ccn3?: string
  cca3: string
  cioc?: string
  independent?: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini?: Gini
  fifa?: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode?: PostalCode
}

export interface CountryName {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  fra?: Fra
  ita?: Ita
  lat?: Lat
  nld?: Nld
  srp?: Srp
  mkd?: Mkd
  bar?: Bar
  lit?: Lit
  fin?: Fin
  swe?: Swe
  sqi?: Sqi
  eng?: Eng
  gle?: Gle
  deu?: Deu
  por?: Por
  dan?: Dan
  slk?: Slk
  ltz?: Ltz
  ell?: Ell
  ron?: Ron
  ukr?: Ukr
  cat?: Cat
  rus?: Rus
  pol?: Pol
  mlt?: Mlt
  bos?: Bos
  hrv?: Hrv
  slv?: Slv
  nrf?: Nrf
  bel?: Bel
  ces?: Ces
  isl?: Isl
  glv?: Glv
  est?: Est
  gsw?: Gsw
  roh?: Roh
  spa?: Spa
  hun?: Hun
  bul?: Bul
  fao?: Fao
  nor?: Nor
  nfr?: Nfr
  cnr?: Cnr
  nno?: Nno
  nob?: Nob
  smi?: Smi
  lav?: Lav
  tur?: Tur
}

export interface Fra {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Lat {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Mkd {
  official: string
  common: string
}

export interface Bar {
  official: string
  common: string
}

export interface Lit {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Sqi {
  official: string
  common: string
}

export interface Eng {
  official: string
  common: string
}

export interface Gle {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Dan {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Ltz {
  official: string
  common: string
}

export interface Ell {
  official: string
  common: string
}

export interface Ron {
  official: string
  common: string
}

export interface Ukr {
  official: string
  common: string
}

export interface Cat {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Mlt {
  official: string
  common: string
}

export interface Bos {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Slv {
  official: string
  common: string
}

export interface Nrf {
  official: string
  common: string
}

export interface Bel {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Isl {
  official: string
  common: string
}

export interface Glv {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Gsw {
  official: string
  common: string
}

export interface Roh {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Bul {
  official: string
  common: string
}

export interface Fao {
  official: string
  common: string
}

export interface Nor {
  official: string
  common: string
}

export interface Nfr {
  official: string
  common: string
}

export interface Cnr {
  official: string
  common: string
}

export interface Nno {
  official: string
  common: string
}

export interface Nob {
  official: string
  common: string
}

export interface Smi {
  official: string
  common: string
}

export interface Lav {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Currencies {
  EUR?: Eur
  RSD?: Rsd
  MKD?: Mkd2
  ALL?: All
  CHF?: Chf
  DKK?: Dkk
  MDL?: Mdl
  UAH?: Uah
  GBP?: Gbp
  RUB?: Rub
  PLN?: Pln
  BAM?: Bam
  JEP?: Jep
  BYN?: Byn
  CZK?: Czk
  ISK?: Isk
  IMP?: Imp
  RON?: Ron2
  GIP?: Gip
  HUF?: Huf
  BGN?: Bgn
  SEK?: Sek
  FOK?: Fok
  NOK?: Nok
  GGP?: Ggp
}

export interface Eur {
  name: string
  symbol: string
}

export interface Rsd {
  name: string
  symbol: string
}

export interface Mkd2 {
  name: string
  symbol: string
}

export interface All {
  name: string
  symbol: string
}

export interface Chf {
  name: string
  symbol: string
}

export interface Dkk {
  name: string
  symbol: string
}

export interface Mdl {
  name: string
  symbol: string
}

export interface Uah {
  name: string
  symbol: string
}

export interface Gbp {
  name: string
  symbol: string
}

export interface Rub {
  name: string
  symbol: string
}

export interface Pln {
  name: string
  symbol: string
}

export interface Bam {
  name: string
}

export interface Jep {
  name: string
  symbol: string
}

export interface Byn {
  name: string
  symbol: string
}

export interface Czk {
  name: string
  symbol: string
}

export interface Isk {
  name: string
  symbol: string
}

export interface Imp {
  name: string
  symbol: string
}

export interface Ron2 {
  name: string
  symbol: string
}

export interface Gip {
  name: string
  symbol: string
}

export interface Huf {
  name: string
  symbol: string
}

export interface Bgn {
  name: string
  symbol: string
}

export interface Sek {
  name: string
  symbol: string
}

export interface Fok {
  name: string
  symbol: string
}

export interface Nok {
  name: string
  symbol: string
}

export interface Ggp {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  fra?: string
  ita?: string
  lat?: string
  nld?: string
  srp?: string
  mkd?: string
  de?: string
  lit?: string
  fin?: string
  swe?: string
  sqi?: string
  eng?: string
  gle?: string
  deu?: string
  por?: string
  dan?: string
  slk?: string
  ltz?: string
  ell?: string
  ron?: string
  ukr?: string
  cat?: string
  rus?: string
  pol?: string
  mlt?: string
  bos?: string
  hrv?: string
  slv?: string
  nrf?: string
  bel?: string
  ces?: string
  isl?: string
  glv?: string
  est?: string
  gsw?: string
  roh?: string
  spa?: string
  eus?: string
  glc?: string
  hun?: string
  bul?: string
  fao?: string
  nor?: string
  nfr?: string
  cnr?: string
  nno?: string
  nob?: string
  smi?: string
  lav?: string
  tur?: string
}

export interface Translations {
  ara: Ara
  bre: Bre
  ces: Ces2
  cym: Cym
  deu: Deu2
  est: Est2
  fin: Fin2
  fra: Fra2
  hrv: Hrv2
  hun: Hun2
  ita: Ita2
  jpn?: Jpn
  kor: Kor
  nld: Nld2
  per: Per
  pol: Pol2
  por: Por2
  rus: Rus2
  slk: Slk2
  spa: Spa2
  srp: Srp2
  swe: Swe2
  tur: Tur2
  urd: Urd
  zho: Zho
}

export interface Ara {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces2 {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu2 {
  official: string
  common: string
}

export interface Est2 {
  official: string
  common: string
}

export interface Fin2 {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv2 {
  official: string
  common: string
}

export interface Hun2 {
  official: string
  common: string
}

export interface Ita2 {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld2 {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol2 {
  official: string
  common: string
}

export interface Por2 {
  official: string
  common: string
}

export interface Rus2 {
  official: string
  common: string
}

export interface Slk2 {
  official: string
  common: string
}

export interface Spa2 {
  official: string
  common: string
}

export interface Srp2 {
  official: string
  common: string
}

export interface Swe2 {
  official: string
  common: string
}

export interface Tur2 {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng2
  fra?: Fra3
}

export interface Eng2 {
  f: string
  m: string
}

export interface Fra3 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  "2018"?: number
  "2016"?: number
  "2017"?: number
  "2019"?: number
  "2011"?: number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export interface CoatOfArms {
  png?: string
  svg?: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}

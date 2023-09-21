export interface ICountryAPIResponse {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    cioc?: string;
    borders?: string[];
    gini?: { [key: string]: number };
    fifa?: string;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    USD?: Aed;
    CNY?: Aed;
    EUR?: Aed;
    XOF?: Aed;
    STN?: Aed;
    LAK?: Aed;
    ALL?: Aed;
    SDG?: BAM;
    OMR?: Aed;
    NGN?: Aed;
    EGP?: Aed;
    CLP?: Aed;
    CVE?: Aed;
    JPY?: Aed;
    XAF?: Aed;
    DJF?: Aed;
    DKK?: Aed;
    RUB?: Aed;
    ANG?: Aed;
    NZD?: Aed;
    MWK?: Aed;
    AZN?: Aed;
    BBD?: Aed;
    MNT?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    SAR?: Aed;
    WST?: Aed;
    BTN?: Aed;
    INR?: Aed;
    FJD?: Aed;
    PYG?: Aed;
    SRD?: Aed;
    MOP?: Aed;
    AUD?: Aed;
    ERN?: Aed;
    GGP?: Aed;
    VES?: Aed;
    SLL?: Aed;
    LYD?: Aed;
    IDR?: Aed;
    BDT?: Aed;
    NOK?: Aed;
    TZS?: Aed;
    MGA?: Aed;
    CKD?: Aed;
    SEK?: Aed;
    HNL?: Aed;
    PAB?: Aed;
    AWG?: Aed;
    MKD?: Aed;
    AOA?: Aed;
    JEP?: Aed;
    XCD?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    UZS?: Aed;
    FKP?: Aed;
    LBP?: Aed;
    GEL?: Aed;
    MVR?: Aed;
    KGS?: Aed;
    PEN?: Aed;
    AED?: Aed;
    UGX?: Aed;
    UYU?: Aed;
    KWD?: Aed;
    PGK?: Aed;
    AMD?: Aed;
    BND?: Aed;
    SGD?: Aed;
    HUF?: Aed;
    IMP?: Aed;
    UAH?: Aed;
    BWP?: Aed;
    TOP?: Aed;
    THB?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    ZMW?: Aed;
    KES?: Aed;
    SZL?: Aed;
    ZAR?: Aed;
    XPF?: Aed;
    SSP?: Aed;
    PLN?: Aed;
    NIO?: Aed;
    GTQ?: Aed;
    BOB?: Aed;
    GHS?: Aed;
    MZN?: Aed;
    DOP?: Aed;
    GIP?: Aed;
    QAR?: Aed;
    PHP?: Aed;
    ARS?: Aed;
    RWF?: Aed;
    KZT?: Aed;
    MYR?: Aed;
    LSL?: Aed;
    FOK?: Aed;
    CAD?: Aed;
    SYP?: Aed;
    ISK?: Aed;
    IQD?: Aed;
    MAD?: Aed;
    BSD?: Aed;
    BGN?: Aed;
    JMD?: Aed;
    BHD?: Aed;
    KMF?: Aed;
    BRL?: Aed;
    ETB?: Aed;
    CHF?: Aed;
    GMD?: Aed;
    VND?: Aed;
    BMD?: Aed;
    KYD?: Aed;
    KPW?: Aed;
    TMT?: Aed;
    TND?: Aed;
    DZD?: Aed;
    MRU?: Aed;
    IRR?: Aed;
    MUR?: Aed;
    TTD?: Aed;
    KRW?: Aed;
    TWD?: Aed;
    SCR?: Aed;
    RSD?: Aed;
    AFN?: Aed;
    COP?: Aed;
    PKR?: Aed;
    HKD?: Aed;
    CDF?: Aed;
    TVD?: Aed;
    ZWL?: Aed;
    BAM?: BAM;
    TJS?: Aed;
    MDL?: Aed;
    SOS?: Aed;
    MMK?: Aed;
    CZK?: Aed;
    RON?: Aed;
    TRY?: Aed;
    BYN?: Aed;
    NPR?: Aed;
    GYD?: Aed;
    KHR?: Aed;
    MXN?: Aed;
    BIF?: Aed;
    LKR?: Aed;
    NAD?: Aed;
    YER?: Aed;
    GNF?: Aed;
    KID?: Aed;
    CRC?: Aed;
    HTG?: Aed;
    VUV?: Aed;
    SBD?: Aed;
    BZD?: Aed;
    LRD?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

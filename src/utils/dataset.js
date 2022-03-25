const dataset =  [
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5591
  },
  {
    Date: '16/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1377
  },
  {
    Date: '19/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 40
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'CL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 83
  },
  {
    Date: '16/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 673
  },
  {
    Date: '19/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '21/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 111
  },
  {
    Date: '22/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '22/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 69
  },
  {
    Date: '16/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 302
  },
  {
    Date: '19/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 87
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 91
  },
  {
    Date: '19/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '22/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '21/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '21/10/2018',
    Country: 'SY',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 94
  },
  {
    Date: '21/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'SE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 116
  },
  {
    Date: '21/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '19/10/2018',
    Country: 'HN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '21/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '21/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 66
  },
  {
    Date: '22/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '19/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 53
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 69
  },
  {
    Date: '18/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'CD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 47
  },
  {
    Date: '16/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '19/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '16/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 389
  },
  {
    Date: '21/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 441
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 116
  },
  {
    Date: '20/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'ZA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 83
  },
  {
    Date: '17/10/2018',
    Country: 'ID',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2828
  },
  {
    Date: '20/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 866
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 91
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'BS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 223
  },
  {
    Date: '21/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 55
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 34
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 90
  },
  {
    Date: '22/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 56
  },
  {
    Date: '16/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '21/10/2018',
    Country: 'RS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 238
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '16/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 86
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1302
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 136
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 353
  },
  {
    Date: '20/10/2018',
    Country: 'PK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '20/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1013
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 105
  },
  {
    Date: '16/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'MK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'HT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 788
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'SC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 63
  },
  {
    Date: '17/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GF',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 117
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '16/10/2018',
    Country: 'SY',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'CL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 87
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 495
  },
  {
    Date: '19/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '19/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 41
  },
  {
    Date: '16/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '20/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'SD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 37
  },
  {
    Date: '19/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 37
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'AM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 71
  },
  {
    Date: '22/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 51
  },
  {
    Date: '20/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 94
  },
  {
    Date: '21/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 54
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BY',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 81
  },
  {
    Date: '21/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 96
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 81
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 164
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '21/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'QA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MQ',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '21/10/2018',
    Country: 'AG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 109
  },
  {
    Date: '18/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '17/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 600
  },
  {
    Date: '21/10/2018',
    Country: 'UY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '21/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 88
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 107
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 83
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '19/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 750
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '21/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 76
  },
  {
    Date: '18/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'GN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 69
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 862
  },
  {
    Date: '16/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '21/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '19/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 375
  },
  {
    Date: '21/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '18/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 141
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 48
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 75
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '17/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2479
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 350
  },
  {
    Date: '19/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 60
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '17/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '21/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'GY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'RO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'BN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 635
  },
  {
    Date: '20/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2732
  },
  {
    Date: '22/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 81
  },
  {
    Date: '21/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AD',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 59
  },
  {
    Date: '16/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'un',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 85
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 161
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 70
  },
  {
    Date: '17/10/2018',
    Country: 'OM',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 88
  },
  {
    Date: '21/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'MN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 78
  },
  {
    Date: '19/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 203
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 90
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 97
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '19/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 91
  },
  {
    Date: '20/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '19/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '20/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '18/10/2018',
    Country: 'un',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'NE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 333
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '16/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 126
  },
  {
    Date: '18/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 242
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 206
  },
  {
    Date: '22/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 47
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 178
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2656
  },
  {
    Date: '19/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 582
  },
  {
    Date: '17/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'VE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '21/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5336
  },
  {
    Date: '17/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 84
  },
  {
    Date: '20/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 623
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'UY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'SX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 133
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 772
  },
  {
    Date: '16/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'CG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 100
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 36
  },
  {
    Date: '21/10/2018',
    Country: 'NP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 112
  },
  {
    Date: '21/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '17/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 103
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'LI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 728
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'MV',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 85
  },
  {
    Date: '17/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 94
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 115
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '20/10/2018',
    Country: 'CD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 59
  },
  {
    Date: '22/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 196
  },
  {
    Date: '18/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 92
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 109
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1346
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 145
  },
  {
    Date: '16/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 54
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '16/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 875
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 230
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '16/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 683
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '21/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'MA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6411
  },
  {
    Date: '19/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '22/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '22/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 189
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '20/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 61
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 339
  },
  {
    Date: '18/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '22/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 83
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 160
  },
  {
    Date: '17/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 62
  },
  {
    Date: '20/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'RS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '21/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '19/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 176
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 66
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 209
  },
  {
    Date: '19/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '17/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '16/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 216
  },
  {
    Date: '22/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 50
  },
  {
    Date: '20/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 152
  },
  {
    Date: '18/10/2018',
    Country: 'KN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 68
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '18/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '20/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 63
  },
  {
    Date: '22/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 337
  },
  {
    Date: '17/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '20/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '19/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 985
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 4976
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 34
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1004
  },
  {
    Date: '18/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'SY',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'BG',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 237
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 159
  },
  {
    Date: '20/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '18/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1431
  },
  {
    Date: '22/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 100
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '22/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 64
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'AZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 71
  },
  {
    Date: '22/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 47
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '18/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 195
  },
  {
    Date: '18/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 161
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'VC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'BH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '18/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 140
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'CD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 165
  },
  {
    Date: '16/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 95
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 567
  },
  {
    Date: '17/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '19/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 214
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1070
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 150
  },
  {
    Date: '21/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '16/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1256
  },
  {
    Date: '16/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 337
  },
  {
    Date: '22/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 64
  },
  {
    Date: '22/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 111
  },
  {
    Date: '22/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 99
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '19/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'AT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1133
  },
  {
    Date: '19/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 155
  },
  {
    Date: '20/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1013
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 572
  },
  {
    Date: '22/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1228
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '22/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 328
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 364
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 91
  },
  {
    Date: '19/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '19/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 103
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 142
  },
  {
    Date: '20/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 824
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 940
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 205
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 62
  },
  {
    Date: '20/10/2018',
    Country: 'LV',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 236
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 58
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 233
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 83
  },
  {
    Date: '21/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'JM',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 47
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'SK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 84
  },
  {
    Date: '20/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'BS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 140
  },
  {
    Date: '16/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '18/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '21/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '21/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '16/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2663
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 177
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4309
  },
  {
    Date: '19/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6060
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 50
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 113
  },
  {
    Date: '22/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 44
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 738
  },
  {
    Date: '19/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 950
  },
  {
    Date: '19/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 157
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 391
  },
  {
    Date: '18/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'JM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '16/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 46
  },
  {
    Date: '17/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 115
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '18/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3996
  },
  {
    Date: '18/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 50
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GF',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 167
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 157
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'SI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '21/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'SY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 149
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 40
  },
  {
    Date: '22/10/2018',
    Country: 'PA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 45
  },
  {
    Date: '16/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '22/10/2018',
    Country: 'MK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 144
  },
  {
    Date: '16/10/2018',
    Country: 'NO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 90
  },
  {
    Date: '21/10/2018',
    Country: 'MD',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 117
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 118
  },
  {
    Date: '16/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'IS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BD',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 69
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 106
  },
  {
    Date: '20/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 528
  },
  {
    Date: '18/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 160
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 57
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 59
  },
  {
    Date: '19/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 108
  },
  {
    Date: '20/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 241
  },
  {
    Date: '17/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 65
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 80
  },
  {
    Date: '19/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '22/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 618
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1287
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'PK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 374
  },
  {
    Date: '22/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '16/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 288
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 36
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 848
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 180
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'LB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'TC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '17/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 58
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 18
  },
  {
    Date: '20/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 129
  },
  {
    Date: '21/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5396
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 85
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'VG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 81
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'MF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 195
  },
  {
    Date: '20/10/2018',
    Country: 'KN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '16/10/2018',
    Country: 'ZA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 85
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '20/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 89
  },
  {
    Date: '16/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PF',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 153
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 37
  },
  {
    Date: '20/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 304
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 40
  },
  {
    Date: '18/10/2018',
    Country: 'DK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '20/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 65
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 311
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 215
  },
  {
    Date: '22/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 882
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '19/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '17/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '22/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '20/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '16/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1078
  },
  {
    Date: '16/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 188
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 86
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '18/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 193
  },
  {
    Date: '17/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '17/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '18/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 168
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 210
  },
  {
    Date: '17/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '19/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '19/10/2018',
    Country: 'BH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 262
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '16/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 613
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 69
  },
  {
    Date: '21/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 46
  },
  {
    Date: '17/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'PA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 118
  },
  {
    Date: '16/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 36
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'JM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2490
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 84
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2780
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '18/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 125
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 38
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '18/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 45
  },
  {
    Date: '20/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 84
  },
  {
    Date: '21/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SY',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'NE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 146
  },
  {
    Date: '19/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 286
  },
  {
    Date: '19/10/2018',
    Country: 'AG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '20/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 123
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2463
  },
  {
    Date: '21/10/2018',
    Country: 'GN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '16/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '18/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 299
  },
  {
    Date: '21/10/2018',
    Country: 'CY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 85
  },
  {
    Date: '22/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 33
  },
  {
    Date: '18/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 179
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 434
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 93
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 250
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 261
  },
  {
    Date: '19/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1990
  },
  {
    Date: '19/10/2018',
    Country: 'BY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 36
  },
  {
    Date: '16/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '18/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 884
  },
  {
    Date: '20/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 55
  },
  {
    Date: '17/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '18/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '20/10/2018',
    Country: 'PS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 30
  },
  {
    Date: '16/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '19/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 83
  },
  {
    Date: '22/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 80
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 136
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 89
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '22/10/2018',
    Country: 'GM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AF',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 93
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 271
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1266
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '22/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '19/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 330
  },
  {
    Date: '19/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'QA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '16/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 63
  },
  {
    Date: '17/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '21/10/2018',
    Country: 'RS',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 63
  },
  {
    Date: '22/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 268
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1643
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 294
  },
  {
    Date: '16/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '21/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 520
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 42
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '22/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 106
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '20/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '19/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 188
  },
  {
    Date: '16/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '16/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 73
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '19/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 42
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 81
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 234
  },
  {
    Date: '16/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '21/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '17/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 136
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '22/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 121
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'PG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 837
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 329
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 104
  },
  {
    Date: '18/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 191
  },
  {
    Date: '17/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 150
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'AM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 52
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 60
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 59
  },
  {
    Date: '16/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 483
  },
  {
    Date: '18/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '17/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '16/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '20/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '20/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 28
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 62
  },
  {
    Date: '20/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 100
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 204
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 690
  },
  {
    Date: '22/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 557
  },
  {
    Date: '18/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 103
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'ZA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 272
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 53
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 169
  },
  {
    Date: '17/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '20/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'PK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '21/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'AG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '16/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '16/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '19/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 46
  },
  {
    Date: '20/10/2018',
    Country: 'MR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 60
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 40
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '21/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 30
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 85
  },
  {
    Date: '16/10/2018',
    Country: 'BH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 117
  },
  {
    Date: '22/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 51
  },
  {
    Date: '17/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '22/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '21/10/2018',
    Country: 'BY',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '17/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 295
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 74
  },
  {
    Date: '21/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '17/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 89
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'AO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2313
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 512
  },
  {
    Date: '21/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 28
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '22/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'MT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 155
  },
  {
    Date: '21/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 38
  },
  {
    Date: '20/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '17/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 91
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 96
  },
  {
    Date: '21/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '20/10/2018',
    Country: 'MT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '16/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 164
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 90
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 157
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 53
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '17/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 210
  },
  {
    Date: '22/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 574
  },
  {
    Date: '16/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 313
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1609
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 885
  },
  {
    Date: '20/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '21/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 60
  },
  {
    Date: '20/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1239
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '16/10/2018',
    Country: 'CG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 302
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 529
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '19/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 97
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 327
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 142
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 69
  },
  {
    Date: '19/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 120
  },
  {
    Date: '21/10/2018',
    Country: 'BZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '17/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 101
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 147
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2188
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '21/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MQ',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 508
  },
  {
    Date: '22/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '16/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '16/10/2018',
    Country: 'DJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '20/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 82
  },
  {
    Date: '18/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 6502
  },
  {
    Date: '17/10/2018',
    Country: 'ZA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 155
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 43
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '18/10/2018',
    Country: 'TL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '21/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 82
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 431
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '17/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 161
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5954
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 182
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BM',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'DJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 85
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1028
  },
  {
    Date: '21/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '22/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 155
  },
  {
    Date: '18/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 168
  },
  {
    Date: '16/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 147
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 157
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AF',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '21/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '16/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 78
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 119
  },
  {
    Date: '17/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 142
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '20/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 54
  },
  {
    Date: '21/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '22/10/2018',
    Country: 'PS',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 92
  },
  {
    Date: '19/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '18/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 80
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '18/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 235
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 200
  },
  {
    Date: '21/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7381
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 237
  },
  {
    Date: '19/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 41
  },
  {
    Date: '19/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '16/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 46
  },
  {
    Date: '16/10/2018',
    Country: 'MG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 88
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 331
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 203
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 78
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '17/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 83
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 120
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 112
  },
  {
    Date: '22/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '20/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 265
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 78
  },
  {
    Date: '21/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '22/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '21/10/2018',
    Country: 'MG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '19/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 101
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 44
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 11
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 114
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 50
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 169
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 259
  },
  {
    Date: '21/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'BH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'LB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 155
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 122
  },
  {
    Date: '19/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 129
  },
  {
    Date: '22/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '21/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '17/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '20/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '17/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 156
  },
  {
    Date: '18/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 187
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'HN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7046
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '18/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 161
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 52
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 95
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 111
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 64
  },
  {
    Date: '20/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '22/10/2018',
    Country: 'NP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'WS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '16/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'HK',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 495
  },
  {
    Date: '16/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 120
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 172
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 198
  },
  {
    Date: '18/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 34
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 77
  },
  {
    Date: '16/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '18/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 145
  },
  {
    Date: '21/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 54
  },
  {
    Date: '17/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 105
  },
  {
    Date: '21/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'un',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 70
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 149
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 657
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 141
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 126
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 636
  },
  {
    Date: '22/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'LI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 122
  },
  {
    Date: '20/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 54
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '22/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1202
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 465
  },
  {
    Date: '18/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '21/10/2018',
    Country: 'CR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 395
  },
  {
    Date: '17/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'LT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '17/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 147
  },
  {
    Date: '22/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '22/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 964
  },
  {
    Date: '19/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '16/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '16/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'OM',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 256
  },
  {
    Date: '21/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 59
  },
  {
    Date: '18/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '16/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 386
  },
  {
    Date: '16/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 78
  },
  {
    Date: '21/10/2018',
    Country: 'ZA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'GM',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 675
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 103
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '16/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 85
  },
  {
    Date: '17/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 299
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 71
  },
  {
    Date: '20/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '20/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'MA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 101
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '19/10/2018',
    Country: 'GY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1718
  },
  {
    Date: '17/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 28
  },
  {
    Date: '19/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '18/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '17/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 73
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'CG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '22/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'EE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '17/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 130
  },
  {
    Date: '16/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 132
  },
  {
    Date: '19/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 88
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'BY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 108
  },
  {
    Date: '21/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 179
  },
  {
    Date: '20/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 146
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 333
  },
  {
    Date: '20/10/2018',
    Country: 'AL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 215
  },
  {
    Date: '18/10/2018',
    Country: 'ZA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 46
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 609
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 158
  },
  {
    Date: '19/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 33
  },
  {
    Date: '16/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 80
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 124
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 88
  },
  {
    Date: '21/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'RS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '16/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'BS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AD',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '22/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 97
  },
  {
    Date: '20/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '18/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 161
  },
  {
    Date: '22/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 34
  },
  {
    Date: '20/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 212
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'DJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MM',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 47
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '18/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 62
  },
  {
    Date: '17/10/2018',
    Country: 'MF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '18/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'IE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 677
  },
  {
    Date: '21/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 98
  },
  {
    Date: '21/10/2018',
    Country: 'TC',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '16/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 152
  },
  {
    Date: '16/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '16/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 61
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '17/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 28
  },
  {
    Date: '21/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 410
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '17/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 111
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 264
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '18/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'CL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '17/10/2018',
    Country: 'CO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '17/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 80
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1482
  },
  {
    Date: '20/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 38
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '20/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '22/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '17/10/2018',
    Country: 'DO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '17/10/2018',
    Country: 'MF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 823
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'BM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 148
  },
  {
    Date: '22/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 28
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '18/10/2018',
    Country: 'JO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 147
  },
  {
    Date: '22/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 583
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '22/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 43
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 50
  },
  {
    Date: '22/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '18/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 48
  },
  {
    Date: '19/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 110
  },
  {
    Date: '19/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 262
  },
  {
    Date: '18/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 238
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'FO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '17/10/2018',
    Country: 'KE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 661
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 106
  },
  {
    Date: '16/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'VG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 54
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 60
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'BY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 81
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1712
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '16/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '16/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 165
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 280
  },
  {
    Date: '21/10/2018',
    Country: 'CO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 256
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 226
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 300
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '16/10/2018',
    Country: 'IL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '22/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'TM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 101
  },
  {
    Date: '17/10/2018',
    Country: 'IE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '16/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 59
  },
  {
    Date: '16/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '22/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'BL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BY',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 98
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 748
  },
  {
    Date: '17/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 121
  },
  {
    Date: '17/10/2018',
    Country: 'ZW',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 896
  },
  {
    Date: '16/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 62
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 158
  },
  {
    Date: '18/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'SM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 110
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 88
  },
  {
    Date: '20/10/2018',
    Country: 'TC',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '17/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'SE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 229
  },
  {
    Date: '20/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1511
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ET',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '18/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '16/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 84
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 45
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '19/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 374
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '21/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 23
  },
  {
    Date: '17/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 136
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PY',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 72
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 146
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 175
  },
  {
    Date: '18/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '16/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 111
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 83
  },
  {
    Date: '17/10/2018',
    Country: 'JM',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 671
  },
  {
    Date: '17/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 98
  },
  {
    Date: '16/10/2018',
    Country: 'DO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 91
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 103
  },
  {
    Date: '22/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 68
  },
  {
    Date: '18/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '21/10/2018',
    Country: 'ET',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 176
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 108
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 84
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 50
  },
  {
    Date: '17/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '19/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 60
  },
  {
    Date: '19/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '22/10/2018',
    Country: 'CO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 71
  },
  {
    Date: '18/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 420
  },
  {
    Date: '18/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '19/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '16/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 63
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 264
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 205
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 172
  },
  {
    Date: '19/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '18/10/2018',
    Country: 'EG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2642
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '20/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 579
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 79
  },
  {
    Date: '22/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 74
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 131
  },
  {
    Date: '22/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1275
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 303
  },
  {
    Date: '18/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1596
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 65
  },
  {
    Date: '19/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'BQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '17/10/2018',
    Country: 'PG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'MV',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 74
  },
  {
    Date: '19/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 33
  },
  {
    Date: '17/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '17/10/2018',
    Country: 'NE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '21/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 33
  },
  {
    Date: '20/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'RE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '16/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 186
  },
  {
    Date: '17/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 52
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 153
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 71
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 81
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1172
  },
  {
    Date: '18/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 62
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3069
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '18/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '21/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 146
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'RO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 186
  },
  {
    Date: '17/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BY',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '19/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 69
  },
  {
    Date: '19/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 189
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 916
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'QA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 261
  },
  {
    Date: '20/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 487
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '22/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 38
  },
  {
    Date: '16/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 68
  },
  {
    Date: '21/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 184
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 64
  },
  {
    Date: '21/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 37
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 152
  },
  {
    Date: '16/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'LT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BD',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '22/10/2018',
    Country: 'BG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 125
  },
  {
    Date: '16/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 662
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'MK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '21/10/2018',
    Country: 'GI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 155
  },
  {
    Date: '19/10/2018',
    Country: 'BG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 91
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 628
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 92
  },
  {
    Date: '21/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 357
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'KY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'PA',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 98
  },
  {
    Date: '21/10/2018',
    Country: 'MA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '16/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 138
  },
  {
    Date: '21/10/2018',
    Country: 'PA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '18/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 192
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 75
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 102
  },
  {
    Date: '20/10/2018',
    Country: 'RW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1839
  },
  {
    Date: '18/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '22/10/2018',
    Country: 'EC',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 91
  },
  {
    Date: '16/10/2018',
    Country: 'FI',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'CR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 46
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 984
  },
  {
    Date: '22/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '18/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 138
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 113
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 263
  },
  {
    Date: '17/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '16/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '21/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 145
  },
  {
    Date: '20/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1227
  },
  {
    Date: '16/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 141
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 204
  },
  {
    Date: '19/10/2018',
    Country: 'TC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 63
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 476
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 31
  },
  {
    Date: '18/10/2018',
    Country: 'PK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '20/10/2018',
    Country: 'GF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2101
  },
  {
    Date: '20/10/2018',
    Country: 'AZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 108
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 160
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '16/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 77
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '18/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '16/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 110
  },
  {
    Date: '19/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 218
  },
  {
    Date: '16/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'CZ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1585
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 93
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 77
  },
  {
    Date: '17/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 210
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 61
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 58
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 220
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 716
  },
  {
    Date: '19/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '20/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 43
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '21/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1622
  },
  {
    Date: '21/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '22/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'PK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 188
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1476
  },
  {
    Date: '21/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '18/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 72
  },
  {
    Date: '20/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'LY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AF',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 131
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 369
  },
  {
    Date: '18/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 140
  },
  {
    Date: '18/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 204
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 152
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'FR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 843
  },
  {
    Date: '20/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 86
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '18/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 162
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 38
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '20/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 129
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '20/10/2018',
    Country: 'BZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'LY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 621
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'TC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 328
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 61
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 285
  },
  {
    Date: '17/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 211
  },
  {
    Date: '16/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 34
  },
  {
    Date: '17/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 135
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '17/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 82
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 817
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 37
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 62
  },
  {
    Date: '18/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'NC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 187
  },
  {
    Date: '19/10/2018',
    Country: 'IS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'SE',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 310
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 101
  },
  {
    Date: '19/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '20/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'AO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 245
  },
  {
    Date: '21/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '17/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'RO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'HN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '22/10/2018',
    Country: 'GI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 423
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '16/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 26
  },
  {
    Date: '22/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '17/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 86
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 47
  },
  {
    Date: '19/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BD',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 303
  },
  {
    Date: '17/10/2018',
    Country: 'PK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1806
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 74
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'JM',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 82
  },
  {
    Date: '18/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'MA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '20/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 210
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '19/10/2018',
    Country: 'SK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 82
  },
  {
    Date: '17/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 61
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 137
  },
  {
    Date: '19/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '19/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 51
  },
  {
    Date: '21/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 57
  },
  {
    Date: '21/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 352
  },
  {
    Date: '17/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'LU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 293
  },
  {
    Date: '16/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 75
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 370
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '20/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1124
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 114
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'EG',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 31
  },
  {
    Date: '18/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 254
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 17
  },
  {
    Date: '20/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 43
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 85
  },
  {
    Date: '16/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'GG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 53
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 673
  },
  {
    Date: '21/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 87
  },
  {
    Date: '21/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 519
  },
  {
    Date: '16/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '16/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'KR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 825
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '19/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'TR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 75
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 86
  },
  {
    Date: '19/10/2018',
    Country: 'un',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 573
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 581
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 26
  },
  {
    Date: '19/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 214
  },
  {
    Date: '21/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 77
  },
  {
    Date: '20/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '18/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 59
  },
  {
    Date: '18/10/2018',
    Country: 'LC',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '18/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'EC',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 54
  },
  {
    Date: '16/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5680
  },
  {
    Date: '18/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 145
  },
  {
    Date: '17/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 65
  },
  {
    Date: '18/10/2018',
    Country: 'ZM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '19/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 85
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'HU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '21/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '16/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 90
  },
  {
    Date: '19/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '21/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 76
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 290
  },
  {
    Date: '17/10/2018',
    Country: 'SY',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '17/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'FO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1435
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 150
  },
  {
    Date: '20/10/2018',
    Country: 'KZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 109
  },
  {
    Date: '19/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 39
  },
  {
    Date: '16/10/2018',
    Country: 'AG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '20/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 191
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '22/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'MD',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 35
  },
  {
    Date: '17/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '16/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'SA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'AW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '22/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'SV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '20/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 7',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'CO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 146
  },
  {
    Date: '18/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1469
  },
  {
    Date: '20/10/2018',
    Country: 'IQ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '16/10/2018',
    Country: 'PH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 249
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'BO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '17/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'AD',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '20/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '16/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 54
  },
  {
    Date: '16/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 53
  },
  {
    Date: '18/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'PF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'GH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'MM',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 747
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 108
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '21/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '18/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '20/10/2018',
    Country: 'AM',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '19/10/2018',
    Country: 'MV',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 298
  },
  {
    Date: '19/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 906
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 76
  },
  {
    Date: '21/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '19/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'FI',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'AZ',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'DO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 57
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 94
  },
  {
    Date: '21/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 45
  },
  {
    Date: '21/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 230
  },
  {
    Date: '17/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'UZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 84
  },
  {
    Date: '18/10/2018',
    Country: 'PT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '20/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '16/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'GP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 45
  },
  {
    Date: '19/10/2018',
    Country: 'SM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'DO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 107
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'DK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 89
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 4',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'MR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'MY',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 181
  },
  {
    Date: '18/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'SN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'VE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 29
  },
  {
    Date: '21/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 185
  },
  {
    Date: '19/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 61
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 372
  },
  {
    Date: '19/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '17/10/2018',
    Country: 'QA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 224
  },
  {
    Date: '18/10/2018',
    Country: 'CG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'DJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 176
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'BJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'DZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1015
  },
  {
    Date: '19/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 24
  },
  {
    Date: '22/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 93
  },
  {
    Date: '16/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'YE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  },
  {
    Date: '18/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '18/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 603
  },
  {
    Date: '18/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 31
  },
  {
    Date: '21/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 66
  },
  {
    Date: '21/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 78
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 125
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 104
  },
  {
    Date: '21/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 85
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 440
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 29
  },
  {
    Date: '19/10/2018',
    Country: 'GU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '21/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '19/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 898
  },
  {
    Date: '17/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 98
  },
  {
    Date: '21/10/2018',
    Country: 'KR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 55
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 99
  },
  {
    Date: '16/10/2018',
    Country: 'TO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'PE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'HU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '17/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 52
  },
  {
    Date: '21/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 32
  },
  {
    Date: '19/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'PS',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '19/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 128
  },
  {
    Date: '17/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 49
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'AR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ET',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '21/10/2018',
    Country: 'SV',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 106
  },
  {
    Date: '18/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '19/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 86
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1280
  },
  {
    Date: '22/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '19/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 22
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 182
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 96
  },
  {
    Date: '22/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 60
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1767
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 20
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5760
  },
  {
    Date: '19/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 31
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'XK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VI',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'BE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '17/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '19/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 40
  },
  {
    Date: '18/10/2018',
    Country: 'PH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'CL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 133
  },
  {
    Date: '20/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'KH',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 647
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'DE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AF',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'HN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 693
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1698
  },
  {
    Date: '20/10/2018',
    Country: 'HR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'MK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 856
  },
  {
    Date: '20/10/2018',
    Country: 'BF',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'TW',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 92
  },
  {
    Date: '17/10/2018',
    Country: 'IM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'OM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'KZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '17/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '20/10/2018',
    Country: 'BD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'NA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 21
  },
  {
    Date: '22/10/2018',
    Country: 'TW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 107
  },
  {
    Date: '20/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 89
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 102
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '19/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '19/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'CH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 82
  },
  {
    Date: '20/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '19/10/2018',
    Country: 'CY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'RS',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 165
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'VI',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'PY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PK',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 69
  },
  {
    Date: '21/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1449
  },
  {
    Date: '17/10/2018',
    Country: 'BG',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'TR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 117
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'SG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 22
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 210
  },
  {
    Date: '17/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 166
  },
  {
    Date: '19/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '18/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '21/10/2018',
    Country: 'GA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'ID',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'CZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 161
  },
  {
    Date: '19/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'AT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '16/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '19/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'PL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'un',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'VN',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 584
  },
  {
    Date: '18/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 1282
  },
  {
    Date: '19/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '22/10/2018',
    Country: 'HN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'MV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'BE',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'BH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'UY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'GR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 19
  },
  {
    Date: '18/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 39
  },
  {
    Date: '20/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 63
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '17/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 390
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'HK',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'UY',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 808
  },
  {
    Date: '20/10/2018',
    Country: 'AT',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 151
  },
  {
    Date: '16/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'DZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'SM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'RS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'BZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '16/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '16/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ID',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '19/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 22
  },
  {
    Date: '16/10/2018',
    Country: 'TH',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'GL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'SV',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'KY',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 144
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 192
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1749
  },
  {
    Date: '20/10/2018',
    Country: 'BR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 298
  },
  {
    Date: '21/10/2018',
    Country: 'IN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 143
  },
  {
    Date: '21/10/2018',
    Country: 'MT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '22/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 67
  },
  {
    Date: '19/10/2018',
    Country: 'NL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 263
  },
  {
    Date: '20/10/2018',
    Country: 'GI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '20/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 644
  },
  {
    Date: '20/10/2018',
    Country: 'BB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '19/10/2018',
    Country: 'VN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 57
  },
  {
    Date: '19/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 28
  },
  {
    Date: '20/10/2018',
    Country: 'MG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 114
  },
  {
    Date: '16/10/2018',
    Country: 'LK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'GN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'NO',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 450
  },
  {
    Date: '17/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'BO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 25
  },
  {
    Date: '18/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 33
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'AL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'TJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BG',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 71
  },
  {
    Date: '22/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 24
  },
  {
    Date: '17/10/2018',
    Country: 'GB',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 59
  },
  {
    Date: '20/10/2018',
    Country: 'SY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 161
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 34
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'ZA',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '22/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'SA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 77
  },
  {
    Date: '19/10/2018',
    Country: 'HU',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1908
  },
  {
    Date: '16/10/2018',
    Country: 'PT',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '18/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 10
  },
  {
    Date: '17/10/2018',
    Country: 'LU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 12
  },
  {
    Date: '20/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'SK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 27
  },
  {
    Date: '18/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 36
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 11
  },
  {
    Date: '18/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '18/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'MS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'DM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 20
  },
  {
    Date: '17/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '17/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '19/10/2018',
    Country: 'RU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 185
  },
  {
    Date: '16/10/2018',
    Country: 'GD',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6195
  },
  {
    Date: '22/10/2018',
    Country: 'LC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 581
  },
  {
    Date: '16/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 96
  },
  {
    Date: '18/10/2018',
    Country: 'IE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '20/10/2018',
    Country: 'MM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 41
  },
  {
    Date: '16/10/2018',
    Country: 'ML',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '16/10/2018',
    Country: 'CM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'NZ',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'KW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 23
  },
  {
    Date: '20/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 68
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '22/10/2018',
    Country: 'UA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'MX',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '20/10/2018',
    Country: 'PS',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 176
  },
  {
    Date: '20/10/2018',
    Country: 'KH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 162
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 87
  },
  {
    Date: '19/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'GY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 98
  },
  {
    Date: '21/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 52
  },
  {
    Date: '22/10/2018',
    Country: 'AM',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'LY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'HU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'UG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 16
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '20/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 14
  },
  {
    Date: '19/10/2018',
    Country: 'PH',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '21/10/2018',
    Country: 'MU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'GN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 25
  },
  {
    Date: '22/10/2018',
    Country: 'LT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'AD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'FR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'BR',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'MY',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 9
  },
  {
    Date: '19/10/2018',
    Country: 'BT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 756
  },
  {
    Date: '17/10/2018',
    Country: 'VI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 164
  },
  {
    Date: '19/10/2018',
    Country: 'KW',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'AM',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'PR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'NI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 19
  },
  {
    Date: '19/10/2018',
    Country: 'PS',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'CL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'MP',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'LY',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'SO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'JP',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 162
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 54
  },
  {
    Date: '20/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 6
  },
  {
    Date: '20/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 210
  },
  {
    Date: '19/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '20/10/2018',
    Country: 'IT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 58
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1209
  },
  {
    Date: '19/10/2018',
    Country: 'PL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 27
  },
  {
    Date: '16/10/2018',
    Country: 'CL',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'PR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '17/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'MM',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'DK',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 30
  },
  {
    Date: '19/10/2018',
    Country: 'CA',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'IS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 75
  },
  {
    Date: '21/10/2018',
    Country: 'UA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 100
  },
  {
    Date: '21/10/2018',
    Country: 'EC',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 93
  },
  {
    Date: '19/10/2018',
    Country: 'DE',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 15
  },
  {
    Date: '16/10/2018',
    Country: 'PR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'NG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 48
  },
  {
    Date: '21/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'IL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 41
  },
  {
    Date: '20/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '22/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2929
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '17/10/2018',
    Country: 'AW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'EE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'MH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'CR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'IL',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'JP',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '17/10/2018',
    Country: 'VN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 144
  },
  {
    Date: '22/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 47
  },
  {
    Date: '17/10/2018',
    Country: 'IT',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BS',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'IE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'TR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 42
  },
  {
    Date: '21/10/2018',
    Country: 'MD',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'NZ',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 61
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'KR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '22/10/2018',
    Country: 'IR',
    App: 'Screwed',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '16/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 309
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'TZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 13
  },
  {
    Date: '18/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 48
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'MN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'BZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '18/10/2018',
    Country: 'KE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 92
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 6',
    'Daily Users': 346
  },
  {
    Date: '18/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 117
  },
  {
    Date: '22/10/2018',
    Country: 'IN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'SR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 408
  },
  {
    Date: '20/10/2018',
    Country: 'NO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 29
  },
  {
    Date: '19/10/2018',
    Country: 'PA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'IR',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '18/10/2018',
    Country: 'KH',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '18/10/2018',
    Country: 'GE',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'SE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 37
  },
  {
    Date: '19/10/2018',
    Country: 'FR',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'LA',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'CO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'TT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 131
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'MA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '20/10/2018',
    Country: 'IR',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'JE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '17/10/2018',
    Country: 'BG',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '19/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 585
  },
  {
    Date: '21/10/2018',
    Country: 'GT',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'IN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Bally Ball',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 12
  },
  {
    Date: '21/10/2018',
    Country: 'ES',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'BY',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 15
  },
  {
    Date: '18/10/2018',
    Country: 'JM',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 3
  },
  {
    Date: '22/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '21/10/2018',
    Country: 'SX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'CZ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '19/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 88
  },
  {
    Date: '21/10/2018',
    Country: 'NP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '18/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 5
  },
  {
    Date: '18/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 130
  },
  {
    Date: '17/10/2018',
    Country: 'ME',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'BN',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'SI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 9
  },
  {
    Date: '16/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '17/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 86
  },
  {
    Date: '17/10/2018',
    Country: 'PH',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 35
  },
  {
    Date: '18/10/2018',
    Country: 'DZ',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'GB',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 2',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'DO',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'CN',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ZW',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '17/10/2018',
    Country: 'BR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 556
  },
  {
    Date: '21/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 463
  },
  {
    Date: '18/10/2018',
    Country: 'ES',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '20/10/2018',
    Country: 'KG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '21/10/2018',
    Country: 'BG',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'LV',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '16/10/2018',
    Country: 'CI',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 8
  },
  {
    Date: '21/10/2018',
    Country: 'RU',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 7
  },
  {
    Date: '20/10/2018',
    Country: 'NL',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'MY',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'JO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 30
  },
  {
    Date: '20/10/2018',
    Country: 'KW',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '19/10/2018',
    Country: 'SG',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '20/10/2018',
    Country: 'AO',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 7
  },
  {
    Date: '22/10/2018',
    Country: 'LT',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '21/10/2018',
    Country: 'FI',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'VE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 14
  },
  {
    Date: '18/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'LV',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 4
  },
  {
    Date: '18/10/2018',
    Country: 'TH',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 266
  },
  {
    Date: '16/10/2018',
    Country: 'MX',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 167
  },
  {
    Date: '19/10/2018',
    Country: 'IQ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 116
  },
  {
    Date: '18/10/2018',
    Country: 'US',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1503
  },
  {
    Date: '19/10/2018',
    Country: 'IR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 49
  },
  {
    Date: '21/10/2018',
    Country: 'ZA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 8
  },
  {
    Date: '16/10/2018',
    Country: 'NL',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '16/10/2018',
    Country: 'AT',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 13
  },
  {
    Date: '22/10/2018',
    Country: 'LB',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ET',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'BR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 99
  },
  {
    Date: '21/10/2018',
    Country: 'KZ',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'EC',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 44
  },
  {
    Date: '19/10/2018',
    Country: 'UA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '22/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 4
  },
  {
    Date: '22/10/2018',
    Country: 'NC',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '20/10/2018',
    Country: 'RU',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '18/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 71
  },
  {
    Date: '18/10/2018',
    Country: 'PK',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 18
  },
  {
    Date: '21/10/2018',
    Country: 'JP',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 98
  },
  {
    Date: '20/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 17
  },
  {
    Date: '21/10/2018',
    Country: 'AE',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'EG',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 16
  },
  {
    Date: '16/10/2018',
    Country: 'DE',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 78
  },
  {
    Date: '16/10/2018',
    Country: 'ES',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'HK',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 74
  },
  {
    Date: '19/10/2018',
    Country: 'GB',
    App: 'Carz',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Bally Ball',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 6
  },
  {
    Date: '16/10/2018',
    Country: 'TN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 3
  },
  {
    Date: '20/10/2018',
    Country: 'AU',
    App: 'Screwed',
    Platform: 'ios',
    'Ad Network': 'Organic',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'FR',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '17/10/2018',
    Country: 'RO',
    App: 'Blast!',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 21
  },
  {
    Date: '20/10/2018',
    Country: 'AR',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 816
  },
  {
    Date: '22/10/2018',
    Country: 'CA',
    App: 'T-Rex',
    Platform: 'ios',
    'Ad Network': 'Ad Network 5',
    'Daily Users': 1
  },
  {
    Date: '21/10/2018',
    Country: 'HR',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 5
  },
  {
    Date: '17/10/2018',
    Country: 'US',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 92
  },
  {
    Date: '16/10/2018',
    Country: 'AL',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 52
  },
  {
    Date: '20/10/2018',
    Country: 'CN',
    App: 'T-Rex',
    Platform: 'android',
    'Ad Network': 'Organic',
    'Daily Users': 1
  },
  {
    Date: '19/10/2018',
    Country: 'ES',
    App: 'Carz',
    Platform: 'android',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 1
  },
  {
    Date: '17/10/2018',
    Country: 'FJ',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 2
  },
  {
    Date: '22/10/2018',
    Country: 'CN',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 10
  },
  {
    Date: '20/10/2018',
    Country: 'CA',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 3',
    'Daily Users': 5
  },
  {
    Date: '21/10/2018',
    Country: 'AU',
    App: 'Blast!',
    Platform: 'ios',
    'Ad Network': 'Ad Network 1',
    'Daily Users': 32
  }
]


export default dataset
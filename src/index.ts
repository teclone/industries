export type IndustryName =
  | 'Accounting'
  | 'Airlines/Aviation'
  | 'Alternative Dispute Resolution'
  | 'Alternative Medicine'
  | 'Animation'
  | 'Apparel & Fashion'
  | 'Architecture & Planning'
  | 'Arts and Crafts'
  | 'Automotive'
  | 'Aviation and Aerospace'
  | 'Banking'
  | 'Biotechnology'
  | 'Broadcast Media'
  | 'Building Materials'
  | 'Business Supplies and Equipment'
  | 'Capital Markets'
  | 'Chemicals'
  | 'Civic & Social Organization'
  | 'Civil Engineering'
  | 'Commercial Real Estate'
  | 'Computer & Network Security'
  | 'Computer Games'
  | 'Computer Hardware'
  | 'Computer Networking'
  | 'Computer Software'
  | 'Construction'
  | 'Consumer Electronics'
  | 'Consumer Goods'
  | 'Consumer Services'
  | 'Cosmetics'
  | 'Dairy'
  | 'Defense & Space'
  | 'Design'
  | 'E-learning'
  | 'Education Management'
  | 'Electrical/Electronic Manufacturing'
  | 'Entertainment'
  | 'Environmental Services'
  | 'Events Services'
  | 'Executive Office'
  | 'Facilities Services'
  | 'Farming'
  | 'Financial Services'
  | 'Fine Art'
  | 'Fishery'
  | 'Food & Beverages'
  | 'Food Production'
  | 'Fund-Raising'
  | 'Furniture'
  | 'Gambling & Casinos'
  | 'Glass, Ceramics & Concrete'
  | 'Government Administration'
  | 'Government Relations'
  | 'Graphic Design'
  | 'Health, Wellness and Fitness'
  | 'Higher Education'
  | 'Hospital & Health Care'
  | 'Hospitality'
  | 'Human Resources'
  | 'Import and Export'
  | 'Individual & Family Services'
  | 'Industrial Automation'
  | 'Information Services'
  | 'Information Technology and Services'
  | 'Insurance'
  | 'International Affairs'
  | 'International Trade and Development'
  | 'Internet'
  | 'Investment Banking'
  | 'Investment Management'
  | 'Judiciary'
  | 'Law Enforcement'
  | 'Law Practice'
  | 'Legal Services'
  | 'Legislative Office'
  | 'Leisure, Travel & Tourism'
  | 'Libraries'
  | 'Logistics and Supply Chain'
  | 'Luxury Goods & Jewelry'
  | 'Machinery'
  | 'Management Consulting'
  | 'Maritime'
  | 'Market Research'
  | 'Marketing and Advertising'
  | 'Mechanical or Industrial Engineering'
  | 'Media Production'
  | 'Medical Devices'
  | 'Medical Practice'
  | 'Mental Health Care'
  | 'Military'
  | 'Mining & Metals'
  | 'Motion Pictures and Film'
  | 'Museums and Institutions'
  | 'Music'
  | 'Nanotechnology'
  | 'Newspapers'
  | 'Non-Profit Organization Management'
  | 'Oil & Energy'
  | 'Online Media'
  | 'Outsourcing/Offshoring'
  | 'Package/Freight Delivery'
  | 'Packaging and Containers'
  | 'Paper & Forest Products'
  | 'Performing Arts'
  | 'Pharmaceuticals'
  | 'Philanthropy'
  | 'Photography'
  | 'Plastics'
  | 'Political Organization'
  | 'Primary/Secondary Education'
  | 'Printing'
  | 'Professional Training & Coaching'
  | 'Program Development'
  | 'Public Policy'
  | 'Public Relations and Communications'
  | 'Public Safety'
  | 'Publishing'
  | 'Railroad Manufacture'
  | 'Ranching'
  | 'Real Estate'
  | 'Recreational Facilities and Services'
  | 'Religious Institutions'
  | 'Renewables & Environment'
  | 'Research'
  | 'Restaurants'
  | 'Retail'
  | 'Security and Investigations'
  | 'Semiconductors'
  | 'Ship Building'
  | 'Sporting Goods'
  | 'Sports'
  | 'Staffing and Recruiting'
  | 'Supermarkets'
  | 'Telecommunications'
  | 'Textiles'
  | 'Think Tanks'
  | 'Tobacco'
  | 'Translation and Localization'
  | 'Transportation/Trucking/Railroad'
  | 'Utilities'
  | 'Venture Capital & Private Equity'
  | 'Veterinary'
  | 'Warehousing'
  | 'Wholesale'
  | 'Wine and Spirits'
  | 'Wireless'
  | 'Writing and Editing';

export interface Industry {
  name: IndustryName;
  id: number;
  linkedinId: number;
}
export type Industries = {
  [p in IndustryName]: Industry;
};

const industries: Industries = {
  Accounting: {
    id: 1,
    linkedinId: 47,
    name: 'Accounting',
  },
  'Airlines/Aviation': {
    id: 2,
    linkedinId: 94,
    name: 'Airlines/Aviation',
  },
  'Alternative Dispute Resolution': {
    id: 3,
    linkedinId: 120,
    name: 'Alternative Dispute Resolution',
  },
  'Alternative Medicine': {
    id: 4,
    linkedinId: 125,
    name: 'Alternative Medicine',
  },
  Animation: {
    id: 5,
    linkedinId: 127,
    name: 'Animation',
  },
  'Apparel & Fashion': {
    id: 6,
    linkedinId: 19,
    name: 'Apparel & Fashion',
  },
  'Architecture & Planning': {
    id: 7,
    linkedinId: 50,
    name: 'Architecture & Planning',
  },
  'Arts and Crafts': {
    id: 8,
    linkedinId: 111,
    name: 'Arts and Crafts',
  },
  Automotive: {
    id: 9,
    linkedinId: 53,
    name: 'Automotive',
  },
  'Aviation and Aerospace': {
    id: 10,
    linkedinId: 52,
    name: 'Aviation and Aerospace',
  },
  Banking: {
    id: 11,
    linkedinId: 41,
    name: 'Banking',
  },
  Biotechnology: {
    id: 12,
    linkedinId: 12,
    name: 'Biotechnology',
  },
  'Broadcast Media': {
    id: 13,
    linkedinId: 36,
    name: 'Broadcast Media',
  },
  'Building Materials': {
    id: 14,
    linkedinId: 49,
    name: 'Building Materials',
  },
  'Business Supplies and Equipment': {
    id: 15,
    linkedinId: 138,
    name: 'Business Supplies and Equipment',
  },
  'Capital Markets': {
    id: 16,
    linkedinId: 129,
    name: 'Capital Markets',
  },
  Chemicals: {
    id: 17,
    linkedinId: 54,
    name: 'Chemicals',
  },
  'Civic & Social Organization': {
    id: 18,
    linkedinId: 90,
    name: 'Civic & Social Organization',
  },
  'Civil Engineering': {
    id: 19,
    linkedinId: 51,
    name: 'Civil Engineering',
  },
  'Commercial Real Estate': {
    id: 20,
    linkedinId: 128,
    name: 'Commercial Real Estate',
  },
  'Computer & Network Security': {
    id: 21,
    linkedinId: 118,
    name: 'Computer & Network Security',
  },
  'Computer Games': {
    id: 22,
    linkedinId: 109,
    name: 'Computer Games',
  },
  'Computer Hardware': {
    id: 23,
    linkedinId: 3,
    name: 'Computer Hardware',
  },
  'Computer Networking': {
    id: 24,
    linkedinId: 5,
    name: 'Computer Networking',
  },
  'Computer Software': {
    id: 25,
    linkedinId: 4,
    name: 'Computer Software',
  },
  Construction: {
    id: 26,
    linkedinId: 48,
    name: 'Construction',
  },
  'Consumer Electronics': {
    id: 27,
    linkedinId: 24,
    name: 'Consumer Electronics',
  },
  'Consumer Goods': {
    id: 28,
    linkedinId: 25,
    name: 'Consumer Goods',
  },
  'Consumer Services': {
    id: 29,
    linkedinId: 91,
    name: 'Consumer Services',
  },
  Cosmetics: {
    id: 30,
    linkedinId: 18,
    name: 'Cosmetics',
  },
  Dairy: {
    id: 31,
    linkedinId: 65,
    name: 'Dairy',
  },
  'Defense & Space': {
    id: 32,
    linkedinId: 1,
    name: 'Defense & Space',
  },
  Design: {
    id: 33,
    linkedinId: 99,
    name: 'Design',
  },
  'E-learning': {
    id: 35,
    linkedinId: 132,
    name: 'E-learning',
  },
  'Education Management': {
    id: 34,
    linkedinId: 69,
    name: 'Education Management',
  },
  'Electrical/Electronic Manufacturing': {
    id: 36,
    linkedinId: 112,
    name: 'Electrical/Electronic Manufacturing',
  },
  Entertainment: {
    id: 37,
    linkedinId: 28,
    name: 'Entertainment',
  },
  'Environmental Services': {
    id: 38,
    linkedinId: 86,
    name: 'Environmental Services',
  },
  'Events Services': {
    id: 39,
    linkedinId: 110,
    name: 'Events Services',
  },
  'Executive Office': {
    id: 40,
    linkedinId: 76,
    name: 'Executive Office',
  },
  'Facilities Services': {
    id: 41,
    linkedinId: 122,
    name: 'Facilities Services',
  },
  Farming: {
    id: 42,
    linkedinId: 63,
    name: 'Farming',
  },
  'Financial Services': {
    id: 43,
    linkedinId: 43,
    name: 'Financial Services',
  },
  'Fine Art': {
    id: 44,
    linkedinId: 38,
    name: 'Fine Art',
  },
  Fishery: {
    id: 45,
    linkedinId: 66,
    name: 'Fishery',
  },
  'Food & Beverages': {
    id: 46,
    linkedinId: 34,
    name: 'Food & Beverages',
  },
  'Food Production': {
    id: 47,
    linkedinId: 23,
    name: 'Food Production',
  },
  'Fund-Raising': {
    id: 48,
    linkedinId: 101,
    name: 'Fund-Raising',
  },
  Furniture: {
    id: 49,
    linkedinId: 26,
    name: 'Furniture',
  },
  'Gambling & Casinos': {
    id: 50,
    linkedinId: 29,
    name: 'Gambling & Casinos',
  },
  'Glass, Ceramics & Concrete': {
    id: 51,
    linkedinId: 145,
    name: 'Glass, Ceramics & Concrete',
  },
  'Government Administration': {
    id: 52,
    linkedinId: 75,
    name: 'Government Administration',
  },
  'Government Relations': {
    id: 53,
    linkedinId: 148,
    name: 'Government Relations',
  },
  'Graphic Design': {
    id: 54,
    linkedinId: 140,
    name: 'Graphic Design',
  },
  'Health, Wellness and Fitness': {
    id: 55,
    linkedinId: 124,
    name: 'Health, Wellness and Fitness',
  },
  'Higher Education': {
    id: 56,
    linkedinId: 68,
    name: 'Higher Education',
  },
  'Hospital & Health Care': {
    id: 57,
    linkedinId: 14,
    name: 'Hospital & Health Care',
  },
  Hospitality: {
    id: 58,
    linkedinId: 31,
    name: 'Hospitality',
  },
  'Human Resources': {
    id: 59,
    linkedinId: 137,
    name: 'Human Resources',
  },
  'Import and Export': {
    id: 60,
    linkedinId: 134,
    name: 'Import and Export',
  },
  'Individual & Family Services': {
    id: 61,
    linkedinId: 88,
    name: 'Individual & Family Services',
  },
  'Industrial Automation': {
    id: 62,
    linkedinId: 147,
    name: 'Industrial Automation',
  },
  'Information Services': {
    id: 63,
    linkedinId: 84,
    name: 'Information Services',
  },
  'Information Technology and Services': {
    id: 64,
    linkedinId: 96,
    name: 'Information Technology and Services',
  },
  Insurance: {
    id: 65,
    linkedinId: 42,
    name: 'Insurance',
  },
  'International Affairs': {
    id: 66,
    linkedinId: 74,
    name: 'International Affairs',
  },
  'International Trade and Development': {
    id: 67,
    linkedinId: 141,
    name: 'International Trade and Development',
  },
  Internet: {
    id: 68,
    linkedinId: 6,
    name: 'Internet',
  },
  'Investment Banking': {
    id: 69,
    linkedinId: 45,
    name: 'Investment Banking',
  },
  'Investment Management': {
    id: 70,
    linkedinId: 46,
    name: 'Investment Management',
  },
  Judiciary: {
    id: 71,
    linkedinId: 73,
    name: 'Judiciary',
  },
  'Law Enforcement': {
    id: 72,
    linkedinId: 77,
    name: 'Law Enforcement',
  },
  'Law Practice': {
    id: 73,
    linkedinId: 9,
    name: 'Law Practice',
  },
  'Legal Services': {
    id: 74,
    linkedinId: 10,
    name: 'Legal Services',
  },
  'Legislative Office': {
    id: 75,
    linkedinId: 72,
    name: 'Legislative Office',
  },
  'Leisure, Travel & Tourism': {
    id: 76,
    linkedinId: 30,
    name: 'Leisure, Travel & Tourism',
  },
  Libraries: {
    id: 77,
    linkedinId: 85,
    name: 'Libraries',
  },
  'Logistics and Supply Chain': {
    id: 78,
    linkedinId: 116,
    name: 'Logistics and Supply Chain',
  },
  'Luxury Goods & Jewelry': {
    id: 79,
    linkedinId: 143,
    name: 'Luxury Goods & Jewelry',
  },
  Machinery: {
    id: 80,
    linkedinId: 55,
    name: 'Machinery',
  },
  'Management Consulting': {
    id: 81,
    linkedinId: 11,
    name: 'Management Consulting',
  },
  Maritime: {
    id: 82,
    linkedinId: 95,
    name: 'Maritime',
  },
  'Market Research': {
    id: 83,
    linkedinId: 97,
    name: 'Market Research',
  },
  'Marketing and Advertising': {
    id: 84,
    linkedinId: 80,
    name: 'Marketing and Advertising',
  },
  'Mechanical or Industrial Engineering': {
    id: 85,
    linkedinId: 135,
    name: 'Mechanical or Industrial Engineering',
  },
  'Media Production': {
    id: 86,
    linkedinId: 126,
    name: 'Media Production',
  },
  'Medical Devices': {
    id: 87,
    linkedinId: 17,
    name: 'Medical Devices',
  },
  'Medical Practice': {
    id: 88,
    linkedinId: 13,
    name: 'Medical Practice',
  },
  'Mental Health Care': {
    id: 89,
    linkedinId: 139,
    name: 'Mental Health Care',
  },
  Military: {
    id: 90,
    linkedinId: 71,
    name: 'Military',
  },
  'Mining & Metals': {
    id: 91,
    linkedinId: 56,
    name: 'Mining & Metals',
  },
  'Motion Pictures and Film': {
    id: 92,
    linkedinId: 35,
    name: 'Motion Pictures and Film',
  },
  'Museums and Institutions': {
    id: 93,
    linkedinId: 37,
    name: 'Museums and Institutions',
  },
  Music: {
    id: 94,
    linkedinId: 115,
    name: 'Music',
  },
  Nanotechnology: {
    id: 95,
    linkedinId: 114,
    name: 'Nanotechnology',
  },
  Newspapers: {
    id: 96,
    linkedinId: 81,
    name: 'Newspapers',
  },
  'Non-Profit Organization Management': {
    id: 97,
    linkedinId: 100,
    name: 'Non-Profit Organization Management',
  },
  'Oil & Energy': {
    id: 98,
    linkedinId: 57,
    name: 'Oil & Energy',
  },
  'Online Media': {
    id: 99,
    linkedinId: 113,
    name: 'Online Media',
  },
  'Outsourcing/Offshoring': {
    id: 100,
    linkedinId: 123,
    name: 'Outsourcing/Offshoring',
  },
  'Package/Freight Delivery': {
    id: 101,
    linkedinId: 87,
    name: 'Package/Freight Delivery',
  },
  'Packaging and Containers': {
    id: 102,
    linkedinId: 146,
    name: 'Packaging and Containers',
  },
  'Paper & Forest Products': {
    id: 103,
    linkedinId: 61,
    name: 'Paper & Forest Products',
  },
  'Performing Arts': {
    id: 104,
    linkedinId: 39,
    name: 'Performing Arts',
  },
  Pharmaceuticals: {
    id: 105,
    linkedinId: 15,
    name: 'Pharmaceuticals',
  },
  Philanthropy: {
    id: 106,
    linkedinId: 131,
    name: 'Philanthropy',
  },
  Photography: {
    id: 107,
    linkedinId: 136,
    name: 'Photography',
  },
  Plastics: {
    id: 108,
    linkedinId: 117,
    name: 'Plastics',
  },
  'Political Organization': {
    id: 109,
    linkedinId: 107,
    name: 'Political Organization',
  },
  'Primary/Secondary Education': {
    id: 110,
    linkedinId: 67,
    name: 'Primary/Secondary Education',
  },
  Printing: {
    id: 111,
    linkedinId: 83,
    name: 'Printing',
  },
  'Professional Training & Coaching': {
    id: 112,
    linkedinId: 105,
    name: 'Professional Training & Coaching',
  },
  'Program Development': {
    id: 113,
    linkedinId: 102,
    name: 'Program Development',
  },
  'Public Policy': {
    id: 114,
    linkedinId: 79,
    name: 'Public Policy',
  },
  'Public Relations and Communications': {
    id: 115,
    linkedinId: 98,
    name: 'Public Relations and Communications',
  },
  'Public Safety': {
    id: 116,
    linkedinId: 78,
    name: 'Public Safety',
  },
  Publishing: {
    id: 117,
    linkedinId: 82,
    name: 'Publishing',
  },
  'Railroad Manufacture': {
    id: 118,
    linkedinId: 62,
    name: 'Railroad Manufacture',
  },
  Ranching: {
    id: 119,
    linkedinId: 64,
    name: 'Ranching',
  },
  'Real Estate': {
    id: 120,
    linkedinId: 44,
    name: 'Real Estate',
  },
  'Recreational Facilities and Services': {
    id: 121,
    linkedinId: 40,
    name: 'Recreational Facilities and Services',
  },
  'Religious Institutions': {
    id: 122,
    linkedinId: 89,
    name: 'Religious Institutions',
  },
  'Renewables & Environment': {
    id: 123,
    linkedinId: 144,
    name: 'Renewables & Environment',
  },
  Research: {
    id: 124,
    linkedinId: 70,
    name: 'Research',
  },
  Restaurants: {
    id: 125,
    linkedinId: 32,
    name: 'Restaurants',
  },
  Retail: {
    id: 126,
    linkedinId: 27,
    name: 'Retail',
  },
  'Security and Investigations': {
    id: 127,
    linkedinId: 121,
    name: 'Security and Investigations',
  },
  Semiconductors: {
    id: 128,
    linkedinId: 7,
    name: 'Semiconductors',
  },
  'Ship Building': {
    id: 129,
    linkedinId: 58,
    name: 'Ship Building',
  },
  'Sporting Goods': {
    id: 130,
    linkedinId: 20,
    name: 'Sporting Goods',
  },
  Sports: {
    id: 131,
    linkedinId: 33,
    name: 'Sports',
  },
  'Staffing and Recruiting': {
    id: 132,
    linkedinId: 104,
    name: 'Staffing and Recruiting',
  },
  Supermarkets: {
    id: 133,
    linkedinId: 22,
    name: 'Supermarkets',
  },
  Telecommunications: {
    id: 134,
    linkedinId: 8,
    name: 'Telecommunications',
  },
  Textiles: {
    id: 135,
    linkedinId: 60,
    name: 'Textiles',
  },
  'Think Tanks': {
    id: 136,
    linkedinId: 130,
    name: 'Think Tanks',
  },
  Tobacco: {
    id: 137,
    linkedinId: 21,
    name: 'Tobacco',
  },
  'Translation and Localization': {
    id: 138,
    linkedinId: 108,
    name: 'Translation and Localization',
  },
  'Transportation/Trucking/Railroad': {
    id: 139,
    linkedinId: 92,
    name: 'Transportation/Trucking/Railroad',
  },
  Utilities: {
    id: 140,
    linkedinId: 59,
    name: 'Utilities',
  },
  'Venture Capital & Private Equity': {
    id: 141,
    linkedinId: 106,
    name: 'Venture Capital & Private Equity',
  },
  Veterinary: {
    id: 142,
    linkedinId: 16,
    name: 'Veterinary',
  },
  Warehousing: {
    id: 143,
    linkedinId: 93,
    name: 'Warehousing',
  },
  Wholesale: {
    id: 144,
    linkedinId: 133,
    name: 'Wholesale',
  },
  'Wine and Spirits': {
    id: 145,
    linkedinId: 142,
    name: 'Wine and Spirits',
  },
  Wireless: {
    id: 146,
    linkedinId: 119,
    name: 'Wireless',
  },
  'Writing and Editing': {
    id: 147,
    linkedinId: 103,
    name: 'Writing and Editing',
  },
};

export default industries;

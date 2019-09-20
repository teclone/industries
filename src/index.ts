export interface Industry {
  name: string;
  id: number;
  linkedinId: number;
}

const industries: Industry[] = [
  {
    name: 'Accounting',
    id: 1,
    linkedinId: 47,
  },
  {
    name: 'Airlines/Aviation',
    id: 2,
    linkedinId: 94,
  },
  {
    name: 'Alternative Dispute Resolution',
    id: 3,
    linkedinId: 120,
  },
  {
    name: 'Alternative Medicine',
    id: 4,
    linkedinId: 125,
  },
  {
    name: 'Animation',
    id: 5,
    linkedinId: 127,
  },
  {
    name: 'Apparel & Fashion',
    id: 6,
    linkedinId: 19,
  },
  {
    name: 'Architecture & Planning',
    id: 7,
    linkedinId: 50,
  },
  {
    name: 'Arts and Crafts',
    id: 8,
    linkedinId: 111,
  },
  {
    name: 'Automotive',
    id: 9,
    linkedinId: 53,
  },
  {
    name: 'Aviation and Aerospace',
    id: 10,
    linkedinId: 52,
  },
  {
    name: 'Banking',
    id: 11,
    linkedinId: 41,
  },
  {
    name: 'Biotechnology',
    id: 12,
    linkedinId: 12,
  },
  {
    name: 'Broadcast Media',
    id: 13,
    linkedinId: 36,
  },
  {
    name: 'Building Materials',
    id: 14,
    linkedinId: 49,
  },
  {
    name: 'Business Supplies and Equipment',
    id: 15,
    linkedinId: 138,
  },
  {
    name: 'Capital Markets',
    id: 16,
    linkedinId: 129,
  },
  {
    name: 'Chemicals',
    id: 17,
    linkedinId: 54,
  },
  {
    name: 'Civic & Social Organization',
    id: 18,
    linkedinId: 90,
  },
  {
    name: 'Civil Engineering',
    id: 19,
    linkedinId: 51,
  },
  {
    name: 'Commercial Real Estate',
    id: 20,
    linkedinId: 128,
  },
  {
    name: 'Computer & Network Security',
    id: 21,
    linkedinId: 118,
  },
  {
    name: 'Computer Games',
    id: 22,
    linkedinId: 109,
  },
  {
    name: 'Computer Hardware',
    id: 23,
    linkedinId: 3,
  },
  {
    name: 'Computer Networking',
    id: 24,
    linkedinId: 5,
  },
  {
    name: 'Computer Software',
    id: 25,
    linkedinId: 4,
  },
  {
    name: 'Construction',
    id: 26,
    linkedinId: 48,
  },
  {
    name: 'Consumer Electronics',
    id: 27,
    linkedinId: 24,
  },
  {
    name: 'Consumer Goods',
    id: 28,
    linkedinId: 25,
  },
  {
    name: 'Consumer Services',
    id: 29,
    linkedinId: 91,
  },
  {
    name: 'Cosmetics',
    id: 30,
    linkedinId: 18,
  },
  {
    name: 'Dairy',
    id: 31,
    linkedinId: 65,
  },
  {
    name: 'Defense & Space',
    id: 32,
    linkedinId: 1,
  },
  {
    name: 'Design',
    id: 33,
    linkedinId: 99,
  },
  {
    name: 'Education Management',
    id: 34,
    linkedinId: 69,
  },
  {
    name: 'E-learning',
    id: 35,
    linkedinId: 132,
  },
  {
    name: 'Electrical/Electronic Manufacturing',
    id: 36,
    linkedinId: 112,
  },
  {
    name: 'Entertainment',
    id: 37,
    linkedinId: 28,
  },
  {
    name: 'Environmental Services',
    id: 38,
    linkedinId: 86,
  },
  {
    name: 'Events Services',
    id: 39,
    linkedinId: 110,
  },
  {
    name: 'Executive Office',
    id: 40,
    linkedinId: 76,
  },
  {
    name: 'Facilities Services',
    id: 41,
    linkedinId: 122,
  },
  {
    name: 'Farming',
    id: 42,
    linkedinId: 63,
  },
  {
    name: 'Financial Services',
    id: 43,
    linkedinId: 43,
  },
  {
    name: 'Fine Art',
    id: 44,
    linkedinId: 38,
  },
  {
    name: 'Fishery',
    id: 45,
    linkedinId: 66,
  },
  {
    name: 'Food & Beverages',
    id: 46,
    linkedinId: 34,
  },
  {
    name: 'Food Production',
    id: 47,
    linkedinId: 23,
  },
  {
    name: 'Fund-Raising',
    id: 48,
    linkedinId: 101,
  },
  {
    name: 'Furniture',
    id: 49,
    linkedinId: 26,
  },
  {
    name: 'Gambling & Casinos',
    id: 50,
    linkedinId: 29,
  },
  {
    name: 'Glass, Ceramics & Concrete',
    id: 51,
    linkedinId: 145,
  },
  {
    name: 'Government Administration',
    id: 52,
    linkedinId: 75,
  },
  {
    name: 'Government Relations',
    id: 53,
    linkedinId: 148,
  },
  {
    name: 'Graphic Design',
    id: 54,
    linkedinId: 140,
  },
  {
    name: 'Health, Wellness and Fitness',
    id: 55,
    linkedinId: 124,
  },
  {
    name: 'Higher Education',
    id: 56,
    linkedinId: 68,
  },
  {
    name: 'Hospital & Health Care',
    id: 57,
    linkedinId: 14,
  },
  {
    name: 'Hospitality',
    id: 58,
    linkedinId: 31,
  },
  {
    name: 'Human Resources',
    id: 59,
    linkedinId: 137,
  },
  {
    name: 'Import and Export',
    id: 60,
    linkedinId: 134,
  },
  {
    name: 'Individual & Family Services',
    id: 61,
    linkedinId: 88,
  },
  {
    name: 'Industrial Automation',
    id: 62,
    linkedinId: 147,
  },
  {
    name: 'Information Services',
    id: 63,
    linkedinId: 84,
  },
  {
    name: 'Information Technology and Services',
    id: 64,
    linkedinId: 96,
  },
  {
    name: 'Insurance',
    id: 65,
    linkedinId: 42,
  },
  {
    name: 'International Affairs',
    id: 66,
    linkedinId: 74,
  },
  {
    name: 'International Trade and Development',
    id: 67,
    linkedinId: 141,
  },
  {
    name: 'Internet',
    id: 68,
    linkedinId: 6,
  },
  {
    name: 'Investment Banking',
    id: 69,
    linkedinId: 45,
  },
  {
    name: 'Investment Management',
    id: 70,
    linkedinId: 46,
  },
  {
    name: 'Judiciary',
    id: 71,
    linkedinId: 73,
  },
  {
    name: 'Law Enforcement',
    id: 72,
    linkedinId: 77,
  },
  {
    name: 'Law Practice',
    id: 73,
    linkedinId: 9,
  },
  {
    name: 'Legal Services',
    id: 74,
    linkedinId: 10,
  },
  {
    name: 'Legislative Office',
    id: 75,
    linkedinId: 72,
  },
  {
    name: 'Leisure, Travel & Tourism',
    id: 76,
    linkedinId: 30,
  },
  {
    name: 'Libraries',
    id: 77,
    linkedinId: 85,
  },
  {
    name: 'Logistics and Supply Chain',
    id: 78,
    linkedinId: 116,
  },
  {
    name: 'Luxury Goods & Jewelry',
    id: 79,
    linkedinId: 143,
  },
  {
    name: 'Machinery',
    id: 80,
    linkedinId: 55,
  },
  {
    name: 'Management Consulting',
    id: 81,
    linkedinId: 11,
  },
  {
    name: 'Maritime',
    id: 82,
    linkedinId: 95,
  },
  {
    name: 'Market Research',
    id: 83,
    linkedinId: 97,
  },
  {
    name: 'Marketing and Advertising',
    id: 84,
    linkedinId: 80,
  },
  {
    name: 'Mechanical or Industrial Engineering',
    id: 85,
    linkedinId: 135,
  },
  {
    name: 'Media Production',
    id: 86,
    linkedinId: 126,
  },
  {
    name: 'Medical Devices',
    id: 87,
    linkedinId: 17,
  },
  {
    name: 'Medical Practice',
    id: 88,
    linkedinId: 13,
  },
  {
    name: 'Mental Health Care',
    id: 89,
    linkedinId: 139,
  },
  {
    name: 'Military',
    id: 90,
    linkedinId: 71,
  },
  {
    name: 'Mining & Metals',
    id: 91,
    linkedinId: 56,
  },
  {
    name: 'Motion Pictures and Film',
    id: 92,
    linkedinId: 35,
  },
  {
    name: 'Museums and Institutions',
    id: 93,
    linkedinId: 37,
  },
  {
    name: 'Music',
    id: 94,
    linkedinId: 115,
  },
  {
    name: 'Nanotechnology',
    id: 95,
    linkedinId: 114,
  },
  {
    name: 'Newspapers',
    id: 96,
    linkedinId: 81,
  },
  {
    name: 'Non-Profit Organization Management',
    id: 97,
    linkedinId: 100,
  },
  {
    name: 'Oil & Energy',
    id: 98,
    linkedinId: 57,
  },
  {
    name: 'Online Media',
    id: 99,
    linkedinId: 113,
  },
  {
    name: 'Outsourcing/Offshoring',
    id: 100,
    linkedinId: 123,
  },
  {
    name: 'Package/Freight Delivery',
    id: 101,
    linkedinId: 87,
  },
  {
    name: 'Packaging and Containers',
    id: 102,
    linkedinId: 146,
  },
  {
    name: 'Paper & Forest Products',
    id: 103,
    linkedinId: 61,
  },
  {
    name: 'Performing Arts',
    id: 104,
    linkedinId: 39,
  },
  {
    name: 'Pharmaceuticals',
    id: 105,
    linkedinId: 15,
  },
  {
    name: 'Philanthropy',
    id: 106,
    linkedinId: 131,
  },
  {
    name: 'Photography',
    id: 107,
    linkedinId: 136,
  },
  {
    name: 'Plastics',
    id: 108,
    linkedinId: 117,
  },
  {
    name: 'Political Organization',
    id: 109,
    linkedinId: 107,
  },
  {
    name: 'Primary/Secondary Education',
    id: 110,
    linkedinId: 67,
  },
  {
    name: 'Printing',
    id: 111,
    linkedinId: 83,
  },
  {
    name: 'Professional Training & Coaching',
    id: 112,
    linkedinId: 105,
  },
  {
    name: 'Program Development',
    id: 113,
    linkedinId: 102,
  },
  {
    name: 'Public Policy',
    id: 114,
    linkedinId: 79,
  },
  {
    name: 'Public Relations and Communications',
    id: 115,
    linkedinId: 98,
  },
  {
    name: 'Public Safety',
    id: 116,
    linkedinId: 78,
  },
  {
    name: 'Publishing',
    id: 117,
    linkedinId: 82,
  },
  {
    name: 'Railroad Manufacture',
    id: 118,
    linkedinId: 62,
  },
  {
    name: 'Ranching',
    id: 119,
    linkedinId: 64,
  },
  {
    name: 'Real Estate',
    id: 120,
    linkedinId: 44,
  },
  {
    name: 'Recreational Facilities and Services',
    id: 121,
    linkedinId: 40,
  },
  {
    name: 'Religious Institutions',
    id: 122,
    linkedinId: 89,
  },
  {
    name: 'Renewables & Environment',
    id: 123,
    linkedinId: 144,
  },
  {
    name: 'Research',
    id: 124,
    linkedinId: 70,
  },
  {
    name: 'Restaurants',
    id: 125,
    linkedinId: 32,
  },
  {
    name: 'Retail',
    id: 126,
    linkedinId: 27,
  },
  {
    name: 'Security and Investigations',
    id: 127,
    linkedinId: 121,
  },
  {
    name: 'Semiconductors',
    id: 128,
    linkedinId: 7,
  },
  {
    name: 'Ship Building',
    id: 129,
    linkedinId: 58,
  },
  {
    name: 'Sporting Goods',
    id: 130,
    linkedinId: 20,
  },
  {
    name: 'Sports',
    id: 131,
    linkedinId: 33,
  },
  {
    name: 'Staffing and Recruiting',
    id: 132,
    linkedinId: 104,
  },
  {
    name: 'Supermarkets',
    id: 133,
    linkedinId: 22,
  },
  {
    name: 'Telecommunications',
    id: 134,
    linkedinId: 8,
  },
  {
    name: 'Textiles',
    id: 135,
    linkedinId: 60,
  },
  {
    name: 'Think Tanks',
    id: 136,
    linkedinId: 130,
  },
  {
    name: 'Tobacco',
    id: 137,
    linkedinId: 21,
  },
  {
    name: 'Translation and Localization',
    id: 138,
    linkedinId: 108,
  },
  {
    name: 'Transportation/Trucking/Railroad',
    id: 139,
    linkedinId: 92,
  },
  {
    name: 'Utilities',
    id: 140,
    linkedinId: 59,
  },
  {
    name: 'Venture Capital & Private Equity',
    id: 141,
    linkedinId: 106,
  },
  {
    name: 'Veterinary',
    id: 142,
    linkedinId: 16,
  },
  {
    name: 'Warehousing',
    id: 143,
    linkedinId: 93,
  },
  {
    name: 'Wholesale',
    id: 144,
    linkedinId: 133,
  },
  {
    name: 'Wine and Spirits',
    id: 145,
    linkedinId: 142,
  },
  {
    name: 'Wireless',
    id: 146,
    linkedinId: 119,
  },
  {
    name: 'Writing and Editing',
    id: 147,
    linkedinId: 103,
  },
];

export default industries.sort((industry1, industry2) => (industry1.name < industry2.name ? -1 : 1));

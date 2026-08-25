export const comparisonCatalog = [
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    audience: 'Residential homeowners and EPC contractors',
    metricFocus: 'Cell tech, watt peak, efficiency, temperature coefficient, bifaciality, degradation rate',
    products: [
      {
        id: 'mono-perc-545',
        name: 'Mono PERC 545 Wp',
        maker: 'Rooftop Value Series',
        priceBand: 'Budget',
        score: 82,
        metrics: {
          'Cell tech': 'Mono PERC',
          'Watt peak': '545 Wp',
          Efficiency: '20.9%',
          'Temp coefficient': '-0.35% / C',
          Bifaciality: 'No',
          'Degradation rate': '0.55% yearly'
        }
      },
      {
        id: 'topcon-575',
        name: 'TOPCon 575 Wp',
        maker: 'High Yield Series',
        priceBand: 'Mid',
        score: 91,
        metrics: {
          'Cell tech': 'N-Type TOPCon',
          'Watt peak': '575 Wp',
          Efficiency: '22.1%',
          'Temp coefficient': '-0.30% / C',
          Bifaciality: 'Optional',
          'Degradation rate': '0.40% yearly'
        }
      },
      {
        id: 'bifacial-hjt-600',
        name: 'Bifacial HJT 600 Wp',
        maker: 'Premium Utility Series',
        priceBand: 'Premium',
        score: 94,
        metrics: {
          'Cell tech': 'HJT',
          'Watt peak': '600 Wp',
          Efficiency: '22.8%',
          'Temp coefficient': '-0.26% / C',
          Bifaciality: 'Up to 85%',
          'Degradation rate': '0.35% yearly'
        }
      }
    ]
  },
  {
    id: 'solar-inverters',
    name: 'Solar Inverters',
    audience: 'Solar installers and C&I customers',
    metricFocus: 'Type, MPPT channels, grid compliance, efficiency, max DC input voltage',
    products: [
      {
        id: 'string-5kw',
        name: '5 kW String Inverter',
        maker: 'Home Grid Series',
        priceBand: 'Budget',
        score: 84,
        metrics: {
          Type: 'String',
          'MPPT channels': '2',
          'Grid compliance': 'CEA compliant',
          Efficiency: '97.8%',
          'Max DC input': '600 V'
        }
      },
      {
        id: 'hybrid-6kw',
        name: '6 kW Hybrid Inverter',
        maker: 'Backup Ready Series',
        priceBand: 'Mid',
        score: 89,
        metrics: {
          Type: 'Hybrid',
          'MPPT channels': '2',
          'Grid compliance': 'CEA + anti-islanding',
          Efficiency: '98.1%',
          'Max DC input': '650 V'
        }
      },
      {
        id: 'ci-30kw',
        name: '30 kW C&I Inverter',
        maker: 'Commercial Series',
        priceBand: 'Premium',
        score: 93,
        metrics: {
          Type: 'String C&I',
          'MPPT channels': '4',
          'Grid compliance': 'CEA + remote monitoring',
          Efficiency: '98.5%',
          'Max DC input': '1000 V'
        }
      }
    ]
  },
  {
    id: 'transformers',
    name: 'Distribution Transformers',
    audience: 'EPCs, DISCOM contractors, real estate developers',
    metricFocus: 'Rating, voltage ratio, winding, cooling, loss level',
    products: [
      {
        id: 'dtr-63',
        name: '63 kVA DTR',
        maker: 'Compact Utility Series',
        priceBand: 'Budget',
        score: 80,
        metrics: {
          Rating: '63 kVA',
          'Voltage ratio': '11 kV / 0.433 kV',
          Winding: 'Aluminium',
          Cooling: 'ONAN',
          'Loss level': 'BEE 3 Star'
        }
      },
      {
        id: 'dtr-100',
        name: '100 kVA DTR',
        maker: 'Real Estate Series',
        priceBand: 'Mid',
        score: 87,
        metrics: {
          Rating: '100 kVA',
          'Voltage ratio': '11 kV / 0.433 kV',
          Winding: 'Copper',
          Cooling: 'ONAN',
          'Loss level': 'BEE 4 Star'
        }
      },
      {
        id: 'dtr-250',
        name: '250 kVA DTR',
        maker: 'DISCOM Tender Series',
        priceBand: 'Premium',
        score: 92,
        metrics: {
          Rating: '250 kVA',
          'Voltage ratio': '11 kV / 0.433 kV',
          Winding: 'Copper',
          Cooling: 'ONAN sealed',
          'Loss level': 'BEE 5 Star / IS 1180'
        }
      }
    ]
  },
  {
    id: 'hvac',
    name: 'Air Conditioners (HVAC)',
    audience: 'Retail buyers and B2B procurement teams',
    metricFocus: 'Tonnage, ISEER rating, inverter tech, compressor type, power consumption, refrigerant',
    products: [
      {
        id: 'ac-1ton',
        name: '1 Ton Inverter Split AC',
        maker: 'Small Room Series',
        priceBand: 'Budget',
        score: 83,
        metrics: {
          Tonnage: '1.0 Ton',
          ISEER: '4.2',
          'Inverter tech': 'Yes',
          Compressor: 'Rotary',
          Consumption: '685 kWh/year',
          Refrigerant: 'R32'
        }
      },
      {
        id: 'ac-15ton',
        name: '1.5 Ton 5 Star AC',
        maker: 'Home Comfort Series',
        priceBand: 'Mid',
        score: 90,
        metrics: {
          Tonnage: '1.5 Ton',
          ISEER: '5.1',
          'Inverter tech': 'Dual inverter',
          Compressor: 'Twin rotary',
          Consumption: '760 kWh/year',
          Refrigerant: 'R32'
        }
      },
      {
        id: 'cassette-2ton',
        name: '2 Ton Cassette AC',
        maker: 'Commercial Ceiling Series',
        priceBand: 'Premium',
        score: 88,
        metrics: {
          Tonnage: '2.0 Ton',
          ISEER: '4.7',
          'Inverter tech': 'Yes',
          Compressor: 'Scroll',
          Consumption: '1120 kWh/year',
          Refrigerant: 'R410A'
        }
      }
    ]
  },
  {
    id: 'batteries',
    name: 'Batteries & Energy Storage',
    audience: 'Off-grid, hybrid, telecom and UPS buyers',
    metricFocus: 'Chemistry, depth of discharge, cycle life, C-rate, BMS features',
    products: [
      {
        id: 'lead-acid-150',
        name: '150 Ah Lead-Acid Battery',
        maker: 'Basic Backup Series',
        priceBand: 'Budget',
        score: 76,
        metrics: {
          Chemistry: 'Lead-acid',
          DoD: '50%',
          'Cycle life': '800 cycles',
          'C-rate': '0.2C',
          BMS: 'Not applicable'
        }
      },
      {
        id: 'lfp-5kwh',
        name: '5 kWh LFP Battery',
        maker: 'Solar Storage Series',
        priceBand: 'Mid',
        score: 90,
        metrics: {
          Chemistry: 'LFP',
          DoD: '90%',
          'Cycle life': '4500 cycles',
          'C-rate': '0.5C',
          BMS: 'Cell balancing + protection'
        }
      },
      {
        id: 'rack-10kwh',
        name: '10 kWh Rack Storage',
        maker: 'Hybrid Commercial Series',
        priceBand: 'Premium',
        score: 93,
        metrics: {
          Chemistry: 'LFP modular',
          DoD: '95%',
          'Cycle life': '6000 cycles',
          'C-rate': '1C',
          BMS: 'Smart BMS + remote monitoring'
        }
      }
    ]
  }
];

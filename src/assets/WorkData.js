export const workData = {
  electra: {
    id: 'electra',
    image: '/electra_3.png',
    wide_img: '/electra_wide.png',
    company: 'Electra - A clean iron company.',
    role: 'Data Engineer II (previously Software Engineer - Full Stack)',
    period: '5/2024 - Present',
    location: 'Boulder, CO, hybrid',
    companyUrl: 'https://electra.earth',
    compDescription: "Electra is a pioneering clean iron company focused on revolutionizing the steel industry with sustainable practices and innovative technology.",
    description: 'I own the data platform behind Electra\'s R&D reporting: the pipelines that pull from our production database and plant historian, the dbt models built on top of them, and the tests that decide whether a number is good enough to report. I also built the LIMS those pipelines read from, so I work both ends of the path from instrument to published figure.',
    technologies: ['Python', 'SQL', 'dbt', 'Snowflake', 'PostgreSQL', 'DuckDB', 'TimescaleDB', 'Parquet', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pandas', 'Polars', 'TypeScript', 'Next.js', 'Docker', 'GitHub Actions', 'Grafana', 'Azure'],
    situation: 'Lab and process data was scattered across instrument exports, a plant historian, and spreadsheets. The numbers the research team reported on were assembled by hand, which made them slow to produce and hard to reproduce or audit.',
    task: 'Build the path from source systems to datasets the research team can trust: capture the data properly at the source, land it in a warehouse on a schedule, model it, and test it.',
    action: 'Built a FastAPI/PostgreSQL LIMS (103 tables, 300+ Alembic migrations) with an ingestion layer that normalizes nine scientific instrument formats into one analysis schema, behind an accept/reject review so chemists validate results before they reach reporting. Built a 26-table extract/load pipeline from production Postgres into the warehouse, plus incremental time-series extraction from the plant historian using idempotent upserts on stable keys with lookback windows. Modeled it in dbt across staging, intermediate, and mart layers, and established the data-quality practice on top: source freshness thresholds, uniqueness and referential tests, and singular assertion tests with stored failures. Currently migrating the warehouse to Snowflake with automated schema translation, a chunked bulk loader, and an external stage on Azure Blob Storage.',
    result: 'The research team now works from modeled, tested datasets instead of hand-assembled spreadsheets, with every business rule in the leach-yield marts traced back to a numbered requirement. Along the way I found and corrected a join fan-out that had been averaging unrelated lab samples into a cycle and inflating a reported yield figure.',
    responsibilities: [
      'Warehouse modeling with dbt (staging, intermediate, mart layers)',
      'Incremental and idempotent extract/load pipelines',
      'Time-series extraction from a plant process historian',
      'Data quality: dbt tests, source freshness, documented assumptions',
      'Postgres to Snowflake migration and external staging on Azure',
      'Scientific instrument data ingestion and normalization',
      'Schema design and evolution with SQLAlchemy and Alembic',
      'Scoping requirements directly with the research team'
    ]
  },
  wikirate: {
    id: 'wikirate',
    image: '/wikirate_2.png',
    wide_img: '/wikirate_wide.png',
    company: 'Wikirate - An open source ESG data reporting platform.',
    role: 'Software Engineer - Full Stack',
    period: '8/2023 - 3/2024',
    location: 'Berlin, Germany, remote',
    companyUrl: 'https://wikirate.org',
    compDescription: "Wikirate is an open-source platform that collects and analyzes corporate sustainability data to empower researchers, activists, and consumers with transparent information about environmental, social, and governance (ESG) practices.",
    description: 'Contributed features to an open-source Ruby on Rails platform for corporate sustainability data, built a dashboard that charted submitted data and flagged outliers for review, and wrote a scraper that replaced a manual research process.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Dash', 'FastAPI', 'BeautifulSoup', 'TypeScript', 'React', 'Ruby on Rails'],
    situation: 'ESG data on the platform came in from many contributors, so suspect values were easy to miss. Separately, keeping company records current meant researchers looking up official webpages one at a time.',
    task: 'Make it easier to spot questionable data during review, contribute platform features under the terms of a grant, and cut down the manual lookup work.',
    action: 'Built a dashboard with Pandas and Matplotlib that charted submitted ESG data and highlighted values outside expected ranges. Contributed new features to the Ruby on Rails application per grant requirements and made UI/UX improvements, including a citation component used platform-wide. Wrote a Python scraper (BeautifulSoup) that fetched company Wikipedia pages, extracted official website links, and bulk-updated records through the WikiRate REST API.',
    result: 'Reviewing incoming data got faster with the outliers plotted rather than read out of tables, and the scraper updated thousands of company records that had been maintained by hand.',
    responsibilities: [
      'Outlier visualization dashboard for manual data review',
      'Web scraping and bulk record updates via REST API',
      'Open-source Ruby on Rails feature development',
      'Citation component used platform-wide',
      'UI/UX improvements'
    ]
  },
  tpg: {
    id: 'tpg',
    image: '/tpg_2.png',
    wide_img: '/tpg_wide.png',
    company: 'Travelpass - Your custom travel experience.',
    role: 'Data Engineer',
    period: '1/2022 - 7/2022',
    location: 'South Jordan, UT, remote',
    companyUrl: 'https://travelpass.com',
    compDescription: "Travelpassgroup is a leading travel technology company that provides innovative solutions for personalized travel experiences, including booking platforms and analytics services for the travel industry.",
    description: 'Developed efficient ETL pipelines and data analysis systems to process large-scale travel data, enabling faster insights and decision-making while optimizing costs through cloud infrastructure improvements.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'SQL', 'AWS', 'AWS Lambda'],
    situation: 'Travelpassgroup required scalable ETL pipelines to process millions of travel data points, improve operational efficiency, and reduce infrastructure costs while maintaining data accuracy.',
    task: 'Develop efficient ETL pipelines, automate manual processes, optimize cloud infrastructure costs, and conduct comprehensive data analysis to provide actionable insights to leadership.',
    action: 'Built ETL pipelines with Python and Flask for improved data accuracy and faster insights; automated tasks through cross-functional collaboration; refactored existing jobs into AWS Lambdas for cost optimization; and conducted data analysis on 10 million data points to communicate insights to leadership.',
    result: 'Achieved a 25% increase in operational efficiency through automation, reduced infrastructure costs by 30% through AWS Lambda optimization, and provided leadership with actionable insights from large-scale data analysis.',
    responsibilities: [
      'ETL pipeline development with Python and Flask',
      'Data analysis on 10+ million data points',
      'AWS Lambda optimization for cost reduction',
      'Cross-functional automation initiatives',
      'Leadership reporting and insights communication'
    ]
  }
}
# Stresser-Website

## Overview
Stresser-Website is an advanced online stress measurement portal designed to assess and identify aspects of emotional disturbance. Using machine learning techniques, the project aims to evaluate the severity of core symptoms related to depression, anxiety, and stress, and provide tailored solutions.

## Features
- Online questionnaire for comprehensive stress assessment
- User-friendly interface built with React
- Secure backend powered by Django
- Integration with K-means clustering algorithm for accurate user categorization
- Personalized stress, depression, and anxiety level calculations
- Tailored solution recommendations based on user's cluster

## Tech Stack
- Frontend: React.js
- Backend: Django
- API: Django Rest Framework
- Authentication: Djoser
- Machine Learning: K-means clustering algorithm

## How It Works
1. Users complete an online questionnaire.
2. The K-means clustering algorithm categorizes users into distinct groups based on their responses.
3. The system calculates individual stress, depression, and anxiety levels.
4. Personalized solutions and recommendations are provided based on the user's cluster and calculated levels.

## Installation and Setup

### Prerequisites
- Python 3.x
- Node.js and npm
- Conda (optional, for environment management)

### Steps

1. Clone the repository:
```
  git clone git@github.com:mana9512/Stresser.git
```

2. Set up the backend:
```
  pip install djangorestframework djoser scikit-learn
  python manage.py makemigrations
  python manage.py makemigrations accounts
  python manage.py migrate
  python manage.py migrate accounts
```

  
3. Set up the frontend:
```
  cd Stresser-Website/frontend
  npm install
```

4. Activate Conda environment:
```
  conda activate myDjangoEnv(env name)
```


5. Run the development servers:
- For the Django backend:
  ```
  python manage.py runserver
  ```
- For the React frontend:
  ```
  npm run dev
  ```

## Usage
After starting both servers, navigate to `http://localhost:3000` in your web browser to access the Stresser-Website application. Complete the questionnaire to receive your personalized assessment and recommendations.

## Contributing
We welcome contributions to the Stresser-Website project. Please feel free to submit issues and pull requests.

## License
MIT License

Copyright (c) 2024 mana9512

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

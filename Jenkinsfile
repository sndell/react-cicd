pipeline {
  agent any

  tools {nodejs "NODEJS"}
  
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/sndell/react-cicd', branch: 'main')
      }
    }
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm run test'
      }
    }

  }
}

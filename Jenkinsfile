pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/sndell/react-cicd', branch: 'main')
      }
    }

    stage('Test') {
      agent {
        node {
          label 'node run'
        }

      }
      steps {
        sh '''npm install
npm run test'''
      }
    }

  }
}
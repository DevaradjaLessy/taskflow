pipeline {
    agent any

    environment {
        VERSION = "1.${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build & Tag Docker') {
            steps {
                sh "docker build -t taskflow:${VERSION} ."
                sh "docker tag taskflow:${VERSION} taskflow:latest"
            }
        }

    }

    post {
        success {
            echo "✅ Pipeline OK — image taskflow:${VERSION} prête"
        }
        failure {
            echo "❌ Échec pipeline — vérifier les logs"
        }
    }
}

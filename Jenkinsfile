pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Récupération du code source...'
            }
        }

        stage('Test') {
            steps {
                echo 'Lancement des tests...'
                sh 'node app.test.js'
            }
        }

        stage('Build Docker') {
            steps {
                echo 'Construction de l image Docker...'
                sh 'docker build -t taskflow:latest .'
            }
        }

    }

    post {
        success {
            echo 'Pipeline terminé avec succès !'
        }
        failure {
            echo 'Echec du pipeline — vérifier les logs.'
        }
    }
}
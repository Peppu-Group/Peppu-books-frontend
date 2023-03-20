import React from 'react'
import { Page, Image, PDFViewer, Text, View, Font, Document, StyleSheet } from '@react-pdf/renderer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextareaAutosize from 'react-textarea-autosize'

const styles = StyleSheet.create({
    page: { backgroundColor: 'tomato' },
    section: { color: 'white', textAlign: 'center', margin: 30 },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald',
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald',
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
    <Text style={styles.subtitle} {...props}>
        {children}
    </Text>
);

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header} fixed>
                    ~ Created with react-pdf ~
                </Text>
                <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <Image
        style={styles.image}
        src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg"
      />
      <Subtitle>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Subtitle>
            </View>
        </Page>
    </Document>
);

const Invoice = () => {
    return (

        <PDFViewer>
            <MyDocument />
        </PDFViewer>


    )
}

export default Invoice
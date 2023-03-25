import styles from './styles';
const compose = (classes) => {
    const css = {};
    const classesArray = classes.replace(/\s+/g, ' ').split(' ');
    classesArray.forEach((className) => {
        if (typeof styles[className] !== undefined) {
            Object.assign(css, styles[className]);
        }
    });
    return css;
};
export default compose;

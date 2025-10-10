export default class Format{

    static getCamelCase(text){
        return text.replace(/-(\w)/g, (m, p1) => p1.toUpperCase())
    }

}
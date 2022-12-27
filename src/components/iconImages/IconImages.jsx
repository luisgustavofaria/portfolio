export default function IconImages({ imageName, type }) {
    return <img src={`/${imageName}.${type}`} />
  }
const searchNames = logins => {
  if (!Array.isArray(logins)) return null;
  if (!logins.every(elm => {
    return Array.isArray(elm);
  })) return null;

  return logins.filter(elm =>{
    let [name, email] = elm;
    return typeof name === 'string' && name.charAt(name.length - 1) === '_';
  });
};

export default searchNames;

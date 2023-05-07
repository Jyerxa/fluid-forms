import {useState} from 'react';

const useLocalStorage = (key: string, initialValue: string)  => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error){
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: string | Function) => {
      try {
          const valueToStore = value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          if(valueToStore === '') {
              window.localStorage.removeItem(key);
              return;
          }
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
          console.error(error);
      }
    };

    return [storedValue, setValue]
}

export default useLocalStorage;

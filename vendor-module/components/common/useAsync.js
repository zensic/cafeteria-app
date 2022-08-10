import { useEffect } from "react";

// Credits https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
// custom Hook for automatic abortion on unmount or dependency change
// You might add onFailure for promise errors as well.
const useAsync = (asyncFn, onSuccess) => {
  useEffect(() => {
    let isActive = true;

    asyncFn().then(data => {
      if (isActive) onSuccess(data)
      else console.log("aborted setState on unmounted component")
    });
    return () => {
      isActive = false;
    };
  }, [asyncFn, onSuccess]);
}

export default useAsync;
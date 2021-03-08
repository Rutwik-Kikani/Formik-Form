import React, { useState, useEffect } from "react";

const Thumbnail = ({ file }) => {
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(undefined);

  useEffect(() => {
    if (file) {
      let reader = new FileReader();
      reader.onloadstart = () => {
        setLoading(true);
      };
      reader.onloadend = () => {
        setLoading(false);
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  if (!file) {
    return null;
  } else if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        {console.log("before render > ", thumbnail)}
        <img
          src={thumbnail}
          alt={file.name}
          className="rounded-circle z-depth-12  border border-black"
          data-holder-rendered="true"
          height={128}
          width={128}
        />
      </>
    );
  }
};

export default Thumbnail;

/******************************************************************************************************************************* */

//reference from :https://codesandbox.io/s/lkkjpr5r7?from-embed=&file=/index.js:120-851

// export default class Thumbnail extends Component {
//   state = {
//     loading: false,
//     thumb: undefined,
//   };

// static .....(nextProps, prevState) {
//   console.log("thumbnail.js> GDSFP", nextProps);
//   if (nextProps.file) {
//     let reader = new FileReader();

//     reader.onloadstart = () => {
//       return { loading: true };
//     };
//     reader.onloadend = () => {
//       return { loading: false, thumb: reader.result };
//     };
//     reader.readAsDataURL(nextProps.file);
//   }
//   return prevState;
// }

//   render() {
//     const { file } = this.props;
//     const { loading, thumb } = this.state;

//     if (!file) {
//       return null;
//     }

//     if (loading) {
//       return <p>loading...</p>;
//     }

//     console.log(thumb);

//     return (
//       <img
//         src={thumb}
//         alt={file.name}
//         className="img-thumbnail mt-2"
//         height={200}
//         width={200}
//       />
//     );
//   }
// }

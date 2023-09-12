import { useState } from "react";

const Create = () => {

  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [cover,setCover] = useState('');
  const [intro,setIntro] = useState('');
  const [completed,setCompleted] = useState(false);
  const [review,setReview] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch(name){
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'intro':
        setIntro(value);
        break;
      case 'completed':
        setCompleted(e.target.cheked);
        break;
      case 'review':
        setReview(value);
        break; 
      default:
    }
  }

  const handleOnChangeFile = (event) => {
    const element = event.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function (){
      setCover(reader.result.toString());
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook ={
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    }



  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Title</div>
        <input type="text" name='title' onChange={handleChange} value={title}/>
      </div>

      <div>
        <div>Author</div>
        <input type="text" name='author' onChange={handleChange} value={author}/>
      </div>

      <div>
        <div>Cover</div>
        <input type="file" name='cover' onChange={handleOnChangeFile} />
        <div>
          { !!cover ? <img src={cover} width='200' alt="preview" /> : ''}
        </div>
      </div>
      <div>
        <div>Introduction</div>
        <input type="text" name='intro' onChange={handleChange} value={intro}/>
      </div>
      <div>
        <div>Completed</div>
        <input type="checkbox" name='completed' onChange={handleChange} value={completed}/>
      </div>
      <div>
        <div>Review</div>
        <input type="text" name='review' onChange={handleChange} value={review}/>
      </div>
      <input type="submit" value='Register Book' />
    </form>
  )
}

export {Create};
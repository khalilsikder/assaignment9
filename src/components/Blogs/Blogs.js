import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='bloges'>
        
        
        1.What is context api?
        <br/>
        Ans.Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.

       Let’s understand what the Context API is, the problems it solves and how to work with it.The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc<br/>

        2.What semantic tag?<br/>
        Ans.Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

        On the flip side of this equation, tags such as and  are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.Using semantic tags gives you many more hooks for styling your content, too. Perhaps today you prefer to have your code samples display in the default browser style, but tomorrow, you might want to call them out with a gray background color; later still, you might want to define the precise mono-spaced font family or font stack to use for your samples. You can do all of these things easily by using semantic markup and smartly applied CSS.
       </div>
        
    );
};

export default Blogs;
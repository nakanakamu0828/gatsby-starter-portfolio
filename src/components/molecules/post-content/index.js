import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const ContentStyled = styled.div`
  ${tw`p-4 leading-normal`};

  a {
    ${tw`text-blue`};
  }

  a[target="_blank"]:not(.gatsby-resp-image-link)::after {
    content: '';
    display: inline-block;
    top: 0em;
    left: 0em;
    width: 0.8em;
    height: 0.8em;
    background-image: url('data:image/svg+xml;utf8,<svg color="cornflowerblue" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"></path></svg>');
    background-size: 0.8em 0.8em;
    ${tw`mx-1 bg-color`};
  }

  h2 {
    ${tw`my-2`};

    &:not(first-child) {
      ${tw`mt-5`};
    }  
  }
`

const PostContent = ({ post }) => {
  return <ContentStyled dangerouslySetInnerHTML={{ __html: post.html }} />
}
 

PostContent.propTypes = {
  post: PropTypes.object
}

PostContent.defaultProps = {
  post: null,
}


export default PostContent
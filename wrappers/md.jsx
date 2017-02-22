import React from 'react'
import Helmet from 'react-helmet'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout != 'page') {
            template = <SitePost {...this.props} post={post}/>
        } else {
            template = <SitePage {...this.props} post={post}/>
        }

        return (
            <div>
              <Helmet 
                title={ `${post.title} - ${config.siteTitle}` }
                meta={[
                    {"name": "description", "content": post.description},
                    {"name": "twitter:card", "content": "summary"},
                    {"name": "twitter:site", "content": post.author},
                    {"name": "twitter:title", "content": post.title},
                    {"name": "twitter:description", "content": post.description},
                ]}    />
              { template }
            </div>
            );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper

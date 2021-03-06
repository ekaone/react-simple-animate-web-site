import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Advanced - tip and tricks on react simple animate'}
      meta={[{ name: 'description', content: 'Do more complex animation with React Simple Animate' }]}
    >
      <html lang="en" />
    </Helmet>

    <ContentHeader location={location} title="Advanced" />

    <ContentContainer>
      <h3>Animate with CSS @keyframes</h3>
      <p>
        The following example demonstrate how to easily apply CSS <code>@keyframes</code> animation on your React
        component.
      </p>

      <iframe
        title="Animate with CSS @keyframes"
        src="https://codesandbox.io/embed/o47j97mxk5"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Animate Components in sequences</h3>

      <p>
        React simple animation provides the ability to chain up your animations in sequences, the following example will
        animation components one after another by referring each component's <code>sequenceIndex</code>.
      </p>

      <iframe
        title="react simple animate with animation sequences"
        src="https://codesandbox.io/embed/kk9jo0m117"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Animate SVG</h3>

      <p>
        You can use <code>{`<Animate />`}</code> to animate svg elements, the following example will animate the{' '}
        <code>path</code> element within the <code>svg</code>.
      </p>

      <iframe
        title="react simple animate with animation sequences"
        src="https://codesandbox.io/embed/vqm6w2mv47"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>AnimateKeyFrames to create looping animation</h3>

      <p>Fire wave effect with AnimateKeyFrames</p>

      <iframe
        title="Fire wave effect with AnimateKeyFrames"
        src="https://codesandbox.io/embed/z49nj0q5m"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Use Hooks to control Animate</h3>

      <p>Toggle animation is even simpler.</p>

      <iframe
        title="react simple animate Use Hooks to control Animate"
        src="https://codesandbox.io/embed/o7q2z0lw8y"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </ContentContainer>
  </Layout>
)

export default AnimateGroup

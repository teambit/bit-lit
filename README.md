<h1 align="center">Bit Lit Element</h1>
<p align="center">
  <img src="https://storage.googleapis.com/static.bit.dev/harmony-docs/readme-logo%20(2).png"/>
</p>

<p align="center">
  <a href="https://harmony-docs.bit.dev/">Documentation</a> |
  <a href="https://bit.dev/">Platform</a> |
  <a href="https://www.youtube.com/channel/UCuNkM3qIO79Q3-VrkcDiXfw">Learn</a>
</p>

<h3 align="center">
  Build components first.
</h3>

<p align="center">
Open infrastructure for component-driven applications to speed and scale development.
</p>

<p align="center">
<a href="https://opensource.org/licenses/Apache-2.0"><img alt="apache" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
<a href="https://github.com/teambit/bit/blob/master/CONTRIBUTING.md"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
<img alt="status" src="https://github.com/teambit/bit-angular/workflows/CI/badge.svg">
<a href="https://join.slack.com/t/bit-dev-community/shared_invite/zt-o2tim18y-UzwOCFdTafmFKEqm2tXE4w" ><img alt="Join Slack" src="https://img.shields.io/badge/Slack-Join%20Bit%20Slack-blueviolet"/></a>


## What is Bit Lit Element?

Bit Lit Element is a development environment for Bit Harmony, to enable creation and sharing of Lit Element components with Bit.


### How to Start?

If you haven't already installed bit, install [Bit Version Manager](https://harmony-docs.bit.dev/getting-started/installing-bit):

```bash
npm i -g @teambit/bvm
# or
yarn global add @teambit/bvm
```
Install Bit:

```bash
bvm install
```

Create a new folder for your bit workspace
```bash
mkdir <workspace> && cd <workspace>
```

Initialize a [Bit Harmony workspace](https://harmony-docs.bit.dev/getting-started/initializing-workspace) and then manually configure the environment and install any peer dependencies needed.
```bash
bit init --harmony
```

Note: if you want to use bit in an existing workspace, then just run the above init command in the root folder of your existing workspace.

To use the Lit environment, you first need to check what the latest version available:
```bash
npm dist-tag ls @teambit/lit
```

Then add the following lines in your workspace.jsonc file to apply the Lit development environment to your lit element components in your workspace (replace `x.x.x` by the latest version available):
```bash
"teambit.lit/lit@x.x.x": {},
"teambit.workspace/variants": {
  "lit": { // or whatever folder/s in your workspace your lit element components are in
    "teambit.lit/lit": { }
  }
},
"teambit.generator/generator": {
  "aspects": [
    "teambit.lit/lit"
  ]
}
```

Create a bit component:

```bash
bit create lit ui/my-button
```

Install dependencies:

```bash
bit install
```

Start the dev server

```bash
bit start
```

Open-up your browser on localhost:3000, or any other available port, and display your workspace with your components.


### Resources & Community

- [Videos](https://www.youtube.com/c/Bitdev/videos)
- [Conference talks](https://harmony-docs.bit.dev/resources/interviews)
- [Interviews](https://harmony-docs.bit.dev/resources/interviews)
- [Podcasts](https://harmony-docs.bit.dev/resources/podcasts)
- [Live streams](https://harmony-docs.bit.dev/resources/live-streams)
- [Articles](https://harmony-docs.bit.dev/resources/articles)
- [Community](https://harmony-docs.bit.dev/resources/community)


## Contributing 🎗️

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/teambit/bit/blob/master/CODE_OF_CONDUCT.md).

See [Contributing](https://github.com/teambit/bit/blob/master/CONTRIBUTING.md).

## License 💮

Apache License, Version 2.0
![Analytics](https://ga-beacon.appspot.com/UA-96032224-1/bit/readme)

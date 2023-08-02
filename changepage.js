class changePage {
  getInfo() {
    return {
      id: 'changepage',
      name: 'Change page',
      blocks: [
        {
          opcode: 'changeto',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Change page to [URL]',
          arguments: {
          	URL: {
            	type: Scratch.ArgumentType.STRING
            }
          }
        }
      ]
    };
  }

  changeto(args) {
    location.href = args.URL;
  }
}

Scratch.extensions.register(new changePage());
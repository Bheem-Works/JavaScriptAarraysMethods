# Neovim JavaScript Development Setup

## 🚀 Installation Guide

### 1. Install Neovim
```bash
# Windows (PowerShell)
winget install Neovim.Neovim

# Mac (Homebrew)
brew install neovim

# Linux (Debian/Ubuntu)
sudo apt install neovim


2. Install Plugin Manager (vim-plug)
# Windows
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim | ni "$env:LOCALAPPDATA\nvim-data\site\autoload/plug.vim" -Force

# Mac/Linux
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'


⚙️ Configuration
Open Neovim config:

nvim ~/.config/nvim/init.vim  # Mac/Linux
nvim ~/AppData/Local/nvim/init.vim  # Windows

" ===== BASIC SETTINGS =====
set number              " Show line numbers
syntax enable          " Enable syntax highlighting
set tabstop=2          " 2 spaces per tab
set shiftwidth=2       " Auto-indent uses 2 spaces
set expandtab          " Convert tabs to spaces

" ===== PLUGINS =====
call plug#begin()

" Autocompletion
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" Dracula Theme
Plug 'dracula/vim'

" Auto-close brackets
Plug 'jiangmiao/auto-pairs'

call plug#end()

" ===== POST-SETUP =====
colorscheme dracula     " Apply theme

" ===== KEY MAPPINGS =====
nnoremap <F5> :w<CR>:!node %<CR>  " Save + Run JS with F5



:PlugInstall
:CocInstall coc-tsserver  " JavaScript support


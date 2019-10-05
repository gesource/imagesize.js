# imagesize.js

指定したフォルダ内の画像ファイルの画像サイズを一覧表示するプログラムです。

## Requirement

* image-size

## インストール

image-sizeをインストールする

    npm install image-size

## 使い方

カレントディレクトリの画像ファイルのサイズを表示する

    node imagesize.js

指定したディレクトリ内の画像ファイルのサイズを表示する

    node imagesize.js image-dir

例：imagesフォルダーの画像ファイルのサイズを表示する

    node imagesize.js images

## 出力形式

カンマ区切りで、ファイル名・画像の幅・画像の高さ表示します。

    ファイル名,画像の幅,画像の高さ
    ファイル名,画像の幅,画像の高さ
    ファイル名,画像の幅,画像の高さ
    …

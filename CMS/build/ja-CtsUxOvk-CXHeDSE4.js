const e="Groups",t="Collection Types",n="ページが見つかりません",o={"App.schemas.data-loaded":"The schemas have been successfully loaded","ListViewTable.relation-loaded":"The relations have been loaded","EditRelations.title":"リレーショナルデータ","HeaderLayout.button.label-add-entry":"Create new entry","api.id":"API ID","components.AddFilterCTA.add":"フィルタ","components.AddFilterCTA.hide":"フィルタ","components.DragHandle-label":"Drag","components.DraggableAttr.edit":"クリックして編集","components.DraggableCard.delete.field":"{item}を削除","components.DraggableCard.edit.field":"{item}を編集","components.DraggableCard.move.field":"Move {item}","components.ListViewTable.row-line":"item line {number}","components.DynamicZone.ComponentPicker-label":"Pick one component","components.DynamicZone.add-component":"Add a component to {componentName}","components.DynamicZone.delete-label":"{name}を削除","components.DynamicZone.error-message":"The component contains error(s)","components.DynamicZone.missing-components":"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}","components.DynamicZone.move-down-label":"Move component down","components.DynamicZone.move-up-label":"Move component up","components.DynamicZone.pick-compo":"Pick one component","components.DynamicZone.required":"Component is required","components.EmptyAttributesBlock.button":"設定ページに移動","components.EmptyAttributesBlock.description":"設定を変更することができます","components.FieldItem.linkToComponentLayout":"Set the component's layout","components.FieldSelect.label":"Add a field","components.FilterOptions.button.apply":"適用","components.FiltersPickWrapper.PluginHeader.actions.apply":"適用","components.FiltersPickWrapper.PluginHeader.actions.clearAll":"すべてクリア","components.FiltersPickWrapper.PluginHeader.description":"エントリをフィルタリングするための条件を設定する","components.FiltersPickWrapper.PluginHeader.title.filter":"フィルタ","components.FiltersPickWrapper.hide":"隠す","components.LeftMenu.Search.label":"Search for a content type","components.LeftMenu.collection-types":"Collection Types","components.LeftMenu.single-types":"Single Types","components.LimitSelect.itemsPerPage":"ページあたりのアイテム数","components.NotAllowedInput.text":"No permissions to see this field","components.RepeatableComponent.error-message":"The component(s) contain error(s)","components.Search.placeholder":"エントリを検索する...","components.Select.draft-info-title":"State: Draft","components.Select.publish-info-title":"State: Published","components.SettingsViewWrapper.pluginHeader.description.edit-settings":"Customize how the edit view will look like.","components.SettingsViewWrapper.pluginHeader.description.list-settings":"Define the settings of the list view.","components.SettingsViewWrapper.pluginHeader.title":"Configure the view - {name}","components.TableDelete.delete":"すべて削除","components.TableDelete.deleteSelected":"選択を削除します","components.TableDelete.label":"{number, plural, one {# entry} other {# entries}} selected","components.TableEmpty.withFilters":"適用されたフィルタには{contentType}はありません...","components.TableEmpty.withSearch":"検索に対応する{contentType}はありません（{search}）...","components.TableEmpty.withoutFilter":"{contentType}はありません...","components.empty-repeatable":"No entry yet. Click on the button below to add one.","components.notification.info.maximum-requirement":"You have already reached the maximum number of fields","components.notification.info.minimum-requirement":"A field has been added to match the minimum requirement","components.repeatable.reorder.error":"An error occurred while reordering your component's field, please try again","components.reset-entry":"Reset entry","components.uid.apply":"apply","components.uid.available":"Available","components.uid.regenerate":"Regenerate","components.uid.suggested":"suggested","components.uid.unavailable":"Unavailable","containers.Edit.Link.Layout":"Configure the layout","containers.Edit.Link.Model":"Edit the collection-type","containers.Edit.addAnItem":"アイテムを追加する...","containers.Edit.clickToJump":"クリックするとエントリにジャンプします","containers.Edit.delete":"削除","containers.Edit.delete-entry":"Delete this entry","containers.Edit.editing":"編集...","containers.Edit.information":"Information","containers.Edit.information.by":"By","containers.Edit.information.created":"Created","containers.Edit.information.draftVersion":"draft version","containers.Edit.information.editing":"Editing","containers.Edit.information.lastUpdate":"Last update","containers.Edit.information.publishedVersion":"published version","containers.Edit.pluginHeader.title.new":"Create an entry","containers.Edit.reset":"リセット","containers.Edit.returnList":"リストに戻る","containers.Edit.seeDetails":"詳細","containers.Edit.submit":"保存","containers.EditSettingsView.modal-form.edit-field":"Edit the field","containers.EditView.add.new-entry":"Add an entry","containers.EditView.notification.errors":"The form contains some errors","containers.Home.introduction":"あなたのエントリーを編集するには、左側のメニューの特定のリンクに行きます。このプラグインは設定を編集する適切な方法がなく、まだアクティブな開発中です","containers.Home.pluginHeaderDescription":"パワフルで美しいインターフェイスでエントリを管理します。","containers.Home.pluginHeaderTitle":"コンテンツ マネージャ","containers.List.draft":"Draft","containers.List.errorFetchRecords":"エラー","containers.List.published":"Published","containers.list.displayedFields":"フィールドが表示されました","containers.list.items":"{number, plural, =0 {items} one {item} other {items}}","containers.list.table-headers.publishedAt":"State","containers.ListSettingsView.modal-form.edit-label":"Edit {fieldName}","containers.SettingPage.add.field":"Insert another field","containers.SettingPage.attributes":"属性フィールド","containers.SettingPage.attributes.description":"属性の順序を定義する","containers.SettingPage.editSettings.description":"フィールドをドラッグアンドドロップしてレイアウトを作成する","containers.SettingPage.editSettings.entry.title":"Entry title","containers.SettingPage.editSettings.entry.title.description":"Set the displayed field of your entry","containers.SettingPage.editSettings.relation-field.description":"Set the displayed field in both the edit and list views","containers.SettingPage.editSettings.title":"編集 (設定)","containers.SettingPage.layout":"Layout","containers.SettingPage.listSettings.description":"Configure the options for this collection type","containers.SettingPage.listSettings.title":"一覧 (設定)","containers.SettingPage.pluginHeaderDescription":"Configure the specific settings for this Collection Type","containers.SettingPage.settings":"設定","containers.SettingPage.view":"View","containers.SettingViewModel.pluginHeader.title":"コンテンツ管理 - {name}","containers.SettingsPage.Block.contentType.description":"特定の設定を構成する","containers.SettingsPage.Block.contentType.title":"Collection Types","containers.SettingsPage.Block.generalSettings.description":"Configure the default options for your Collection Types","containers.SettingsPage.Block.generalSettings.title":"一般","containers.SettingsPage.pluginHeaderDescription":"Configure the settings for all your Collection types and Groups","containers.SettingsView.list.subtitle":"Configure the layout and display of your Collection types and groups","containers.SettingsView.list.title":"Display configurations","edit-settings-view.link-to-ctb.components":"Edit the component","edit-settings-view.link-to-ctb.content-types":"Edit the content type","emptyAttributes.button":"Go to collection type builder","emptyAttributes.description":"Add your first field to your Collection Type","emptyAttributes.title":"フィールドはまだありません","error.attribute.key.taken":"この値は既に存在します","error.attribute.sameKeyAndName":"同じにすることはできません","error.attribute.taken":"このフィールド名は既に存在します","error.contentTypeName.taken":"この名前は既に存在します","error.model.fetch":"モデルの設定フェッチ中にエラーが発生しました","error.record.create":"レコードの作成中にエラーが発生しました","error.record.delete":"レコードの削除中にエラーが発生しました","error.record.fetch":"レコードの取得中にエラーが発生しました","error.record.update":"レコードの更新中にエラーが発生しました","error.records.count":"カウントレコードのフェッチ中にエラーが発生しました.","error.records.fetch":"レコードの取得中にエラーが発生しました","error.schema.generation":"スキーマの生成中にエラーが発生しました","error.validation.json":"これはJSONではありません","error.validation.max":"値が高すぎます","error.validation.maxLength":"値が長すぎます","error.validation.min":"値が低すぎます","error.validation.minLength":"値が小さすぎます","error.validation.minSupMax":"優れていることはできません","error.validation.regex":"値は正規表現と一致しません","error.validation.required":"この値の入力は必須です","form.Input.bulkActions":"一括処理を有効にする","form.Input.defaultSort":"デフォルトのソート属性","form.Input.description":"説明文","form.Input.description.placeholder":"プロフィールの表示名","form.Input.editable":"編集可能なフィールド","form.Input.filters":"フィルタを有効にする","form.Input.label":"Label","form.Input.label.inputDescription":"この値は、テーブルの先頭に表示されるラベル","form.Input.pageEntries":"1ページあたりのエントリ数","form.Input.pageEntries.inputDescription":"Note: You can override this value in the Collection Type settings page.","form.Input.placeholder":"プレースホルダー","form.Input.placeholder.placeholder":"My awesome value","form.Input.search":"検索を有効にする","form.Input.search.field":"このフィールドで検索を有効にする","form.Input.sort.field":"このフィールドでソートを有効にする","form.Input.sort.order":"Default sort order","form.Input.wysiwyg":"Display as WYSIWYG","global.displayedFields":"Displayed Fields",groups:e,"groups.numbered":"Groups ({number})","header.name":"Content","link-to-ctb":"Edit the model",models:t,"models.numbered":"Collection Types ({number})","notification.error.displayedFields":"少なくとも1つの表示フィールドが必要です","notification.error.relationship.fetch":"リレーションシップフェッチ中にエラーが発生しました","notification.info.SettingPage.disableSort":"並べ替えを許可する属性が1つ必要です","notification.info.minimumFields":"You need to have at least one field displayed","notification.upload.error":"An error has occurred while uploading your files",pageNotFound:n,"pages.ListView.header-subtitle":"{number, plural, =0 {# entries} one {# entry} other {# entries}} found","pages.NoContentType.button":"Create your first Content-Type","pages.NoContentType.text":"You don't have any content yet, we recommend you to create your first Content-Type.","permissions.not-allowed.create":"You are not allowed to create a document","permissions.not-allowed.update":"You are not allowed to see this document","plugin.description.long":"データベース内のデータを表示、編集、削除するための方法。","plugin.description.short":"データベース内のデータを表示、編集、削除するための方法。","popover.display-relations.label":"Display relations","success.record.delete":"削除","success.record.publish":"Published","success.record.save":"保存","success.record.unpublish":"Unpublished","utils.data-loaded":"The {number, plural, =1 {entry has} other {entries have}} successfully been loaded","popUpWarning.warning.publish-question":"Do you still want to publish?","popUpwarning.warning.has-draft-relations.button-confirm":"Yes, publish"};export{o as default,e as groups,t as models,n as pageNotFound};

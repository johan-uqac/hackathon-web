import data from '../Data Broyeur M1-B.json';

function createBasicBlock() {
    const title = "Fiche de cadenassage";
    const itemArray = [];
    const mainLanguage: string = data.Procedure.DefaultLanguage.toString();
    itemArray.push({'itemId': 1, 'data': [title, data.Unit.Identifier.toString(), data.Unit.Name]});
    itemArray.push({'itemId': 2, 'data': [data.Machine.Identifier, data.Machine.Name]});
    itemArray.push({'itemId': 3, 'data': [data.Procedure.ID.toString(), data.Procedure.Type]});
    itemArray.push({'itemId': 4, 'data': [data.Machine.Location]});

    for (let i = 0; i < data.Procedure.Mechanisms.length; i++) {
        itemArray.push({
            'itemId': (i + itemArray.length + 1).toString(), 
            'data': [
                data.Procedure.Mechanisms[i].Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                data.Procedure.Mechanisms[i].Quantity.toString(),
            ],
            'assetPath': data.Procedure.Mechanisms[i].Image
        });
    }

    return itemArray;
}

function createCategoryBlock() {
    const categoriesArray = [];
    const mainLanguage: string = data.Procedure.DefaultLanguage.toString();

    for (let i = 0; i < data.Procedure.Categories.length; i++) {
        if (data.Procedure.Categories[i].Steps[0].Device.Mechanism.length > 0) {
            const mecanisme = data.Procedure.Categories[i].Steps[0].Device.Mechanism.map(e => ({
                name: e.Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                quantity: e.Quantity.toString(),
                path: e.Image,
            }));
            let tmp = {
                'itemId': i.toString(),
                'CategoryName': data.Procedure.Categories[i].Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Dispositif": data.Procedure.Categories[i].Steps[0].Device.Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Emplacement": data.Procedure.Categories[i].Steps[0].Device.Location[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Energie": data.Procedure.Categories[i].Steps[0].Device.Energy[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Position": data.Procedure.Categories[i].Steps[0].Device.Position[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Icon": data.Procedure.Categories[i].Steps[0].Device.Icon,
                "Instruction": data.Procedure.Categories[i].Steps[0].Instruction[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Mecanisme": mecanisme
            }
            categoriesArray.push(tmp)
        } else {
            categoriesArray.push({
                'itemId': i.toString(),
                'CategoryName': data.Procedure.Categories[i].Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Dispositif": data.Procedure.Categories[i].Steps[0].Device.Name[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Emplacement": data.Procedure.Categories[i].Steps[0].Device.Location[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Energie": data.Procedure.Categories[i].Steps[0].Device.Energy[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Position": data.Procedure.Categories[i].Steps[0].Device.Position[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
                "Icon": data.Procedure.Categories[i].Steps[0].Device.Icon,
                "Instruction": data.Procedure.Categories[i].Steps[0].Instruction[mainLanguage as keyof typeof data.Procedure.DefaultLanguage.toString],
            })

        }

    }

    return categoriesArray;
}

export {
    createBasicBlock, 
    createCategoryBlock
};

// itemId
// data ["", ""]